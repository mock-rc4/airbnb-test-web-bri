import { combineReducers } from "redux";
import { addHostingReducer } from "./addHosting";
import { loginReducer } from "./login";

const rootReducer = combineReducers({
  addHostingReducer,
  loginReducer,
});

export default rootReducer;
