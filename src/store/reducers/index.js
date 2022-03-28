import { combineReducers } from "redux";
import { addHostingReducer } from "./addHosting";
import { loginReducer } from "./login";
import { openSearchBarReducer } from "./openSearchBar";
import { searchHouseReducer } from "./searchHouse";
const rootReducer = combineReducers({
  addHostingReducer,
  loginReducer,
  openSearchBarReducer,
  searchHouseReducer,
});

export default rootReducer;
