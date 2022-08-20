const { gql } = require("apollo-server-express");

console.log("start typeDefs");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    Workoutplan: String
    Pb: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Workoutplan {
    workoutplan_id: ID
    name: String
    workoutplanText: String
    createdAt: String
    user_id: ID
  }

  type Pb {
    pb_id: ID
    pbText: String
    completed: Boolean
    createdAt: String
    user_id: ID
  }

  type Query {
    users: [User]
    user(username: String!): User
    workoutplans(username: String): [Workoutplan]
    workoutplan(workoutplan_id: ID!): Workoutplan
    pbs(username: String!): [Pb]
    pb(pb_id: ID!): Pb
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addWorkoutplan(name: String!, workoutplanText: String!, user_id: ID!): Workoutplan
    addPb(pb: String!, user_id: ID!): Pb
    removeWorkoutplan(workoutplan_id: ID!): Workoutplan
    removePb(pb_id: ID!): Pb
  }
`;
console.log("end typeDefs");

module.exports = typeDefs;
