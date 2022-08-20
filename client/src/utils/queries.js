import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        createdAt
      }
    }
  }
`;

export const QUERY_ALL_WORKOUTPLANS = gql`
  {
    workoutplans {
      name
      workoutplanText
      createdAt
      user_id
    }
  }
`;

export const QUERY_SINGLE_WORKOUTPLAN= gql`
  query workoutplan($id: ID!) {
    workoutplan(_id: $id) {
      workoutplan_id
      name
      workoutplanText
      createdAt
      user_id
    }
  }
`;

export const QUERY_ALL_PBS = gql`
  {
    pbs {
      name
      pbText
      completed
      createdAt
      user_id
    }
  }
`;

export const QUERY_SINGLE_PB = gql`
  query pb($id: ID!) {
    pb(_id: $id) {
      pb_id
      pbText
      completed
      createdAt
      user_id
    }
  }
`;
