const { AuthenticationError } = require("apollo-server-express");
const { User, Pb, Workoutplan } = require("../models");
const { signToken } = require("../utils/auth");

console.log("Start Resolvers");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("workoutplans");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("workoutplans");
    },
    workoutplans: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Workoutplan.find(params).sort({ createdAt: -1 });
    },
    workoutplan: async (parent, { workoutplan_id }) => {
      return Workoutplan.findOne({ user_id: workoutplan_id });
    },
    pbs: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Pb.find(params).sort({ createdAt: -1 });
    },
    pb: async (parent, { pb_id }) => {
      return Pb.findOne({ user_id: pb_id });
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      // First we create the user
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      // Return an `Auth` object that consists of the signed token and user's information
      return { token, user };
    },

    addWorkoutplan: async (parent, { workoutplanText, user_id }) => {
      const workoutplan = await Workoutplan.create({ workoutplanText, user_id });

      await User.findOneAndUpdate(
        { username: user_id },
        { $addToSet: { workoutplans: workoutplan.workoutplan_id } }
      );

      return workoutplan;
    },

    addPb: async (parent, { pbText, user_id }) => {
      const pb = await Pb.create({ pbText, user_id });

      await User.findOneAndUpdate(
        { username: user_id },
        { $addToSet: { pbs: pb.pb_id } }
      );

      return pb;
    },
    removeWorkoutplan: async (parent, { workoutplan_id }) => {
      return Workoutplan.findOneAndDelete({ user_id: workoutplan_id });
    },
    removePb: async (parent, { pb_id }) => {
      return Pb.findOneAndDelete({ user_id: pb_id });
    },
  },
};

console.log("End Resolvers");

module.exports = resolvers;
