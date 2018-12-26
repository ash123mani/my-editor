import { combineReducers } from "redux";
import { selectedTabReducer } from "./selectedTabReducer";
import { createItemReducer } from "./createItemReducer";

export default combineReducers({
  selectedTabReducer,
  createItemReducer
});
