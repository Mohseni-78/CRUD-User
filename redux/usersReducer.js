/* eslint-disable no-case-declarations */
import { CREATE_USER, DELETE_USER, UPDATE_USER } from "../constants";

const initialState = [];

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      const existedUser = state.find(
        (user) => user.email === action.payload.email
      );
      if (existedUser) {
        console.log("user Existed");
        return state;
      }
      state.push(action.payload);
      return [...state];
    case UPDATE_USER:
      const indexU = state.findIndex(
        (user) => user.email === action.currentEmail
      );
      if (action.currentEmail === action.payload.email) {
        state[indexU] = { ...action.payload };
        return [...state];
      }
      if (state.find((user) => user.email === action.payload.email)) {
        console.log(
          "The user you entered already has an account in the system"
        );
        return state;
      }

      state[indexU] = { ...action.payload };
      return [...state];

    case DELETE_USER:
      const filteredUsers = state.filter((user) => user.email !== action.email);
      return [...filteredUsers];
    default:
      return state;
  }
};
