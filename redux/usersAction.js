// Constants ==========>
import { CLONE_STORAGE_IN_STATE, CREATE_USER, DELETE_USER, UPDATE_USER } from "../constants";

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
}
const cloneStorageInState = (payload) => {
  return {
    type: CLONE_STORAGE_IN_STATE,
    payload
  };
};
export { createUser, updateUser, deleteUser ,cloneStorageInState};
