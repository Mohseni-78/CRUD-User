/* eslint-disable no-case-declarations */
// Constants ==========>
import {
  CLONE_STORAGE_IN_STATE,
  CREATE_USER,
  DELETE_USER,
  UPDATE_USER,
} from "../constants";
// React Hot Toast ===========>
import { toast } from "react-hot-toast";
// Helper Functions ============>
import { setLocalStorage } from "../helper/functions";

const initialState = [];

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLONE_STORAGE_IN_STATE:
      return [...action.payload];
    case CREATE_USER:
      const existedUser = state.find(
        ({ email }) => email === action.payload.email
      );
      if (existedUser) {
        toast.error("User Existed");
        return state;
      }
      state.push(action.payload);
      toast.success("User Created");
      setLocalStorage("users", state);
      return [...state];
    case UPDATE_USER:
      const indexU = state.findIndex(
        ({ email }) => email === action.currentEmail
      );
      if (action.currentEmail === action.payload.email) {
        state[indexU] = { ...action.payload };
        toast.success("User Updated");
        setLocalStorage("users", state);
        return [...state];
      }
      if (state.find(({ email }) => email === action.payload.email)) {
        toast.error(
          "The user (email) you entered already has an account in the system"
        );
        return state;
      }

      state[indexU] = { ...action.payload };
      toast.success("User Updated");
      setLocalStorage("users", state);
      return [...state];

    case DELETE_USER:
      const filteredUsers = state.filter(({ email }) => email !== action.email);
      setLocalStorage("users", [...filteredUsers]);
      toast.success("User Deleted");
      return [...filteredUsers];
    default:
      return state;
  }
};
