import { combineReducers } from "redux";
import { nameReducer } from "./NameReducer";
import { arrayReducer } from "./ArrayReducer";

export const rootReducer = combineReducers({
  name: nameReducer,
  myArray: arrayReducer
});
