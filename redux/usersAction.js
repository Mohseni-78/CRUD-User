import { CREATE_USER, DELETE_USER, UPDATE_USER } from "../constants";

const createUser = (payload) => {
  return {
    type: CREATE_USER,
    payload,
  };
};
const updateUser = (payload, currentEmail) => {
  return {
    type: UPDATE_USER,
    currentEmail,
    payload,
  };
};
const deleteUser = (email) => {
  return {
    type: DELETE_USER,
    email,
  };
};
export { createUser, updateUser, deleteUser };
