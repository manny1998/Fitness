import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_WORKOUTPLAN = gql`
  mutation addWorkoutplan($name: String!, $workoutplanText: String!, $user_id: ID!) {
    addWorkoutplan(name: $name, workoutplanText: $workoutplanText, user_id: $user_id) {
      token
      workoutplan {
        name
        workoutplanText
        user_id
      }
    }
  }
`;

export const ADD_PB = gql`
  mutation addPb($pbText: String!, $user_id: ID!) {
    addPb(pbText: $pbText, user_id: $user_id) {
      token
      pb {
        pbText
        user_id
      }
    }
  }
`;
