const { Schema, model, DataTypes } = require("mongoose");

console.log("start workout");

const workoutplanSchema = new Schema({
  name: {
    type: String,
    allowNull: false,
  },

  workoutplanText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 250,
  },

  workoutplan_id: {
    type: Number,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdTime) => moment(createdTime).format("LLLL"),
  },

  user_id: {
    type: Number,
    required: true,
  },
});

const Workoutplan = model("Workoutplan", workoutplanSchema);

console.log("End workoutplan");

module.exports = Workoutplan; 
