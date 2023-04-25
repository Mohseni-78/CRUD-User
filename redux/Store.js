import { createStore } from "redux";
// Reducers ==========>
import { usersReducer } from "./usersReducer";

const store =createStore(usersReducer);
export default store;
