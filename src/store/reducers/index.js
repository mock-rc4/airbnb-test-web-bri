import { combineReducers } from "redux";
import { addHostingReducer } from "./addHosting";
import { loginReducer } from "./login";
import { openSearchBarReducer } from "./openSearchBar";
import { searchHouseReducer } from "./searchHouse";
import { storeHouseIdxReducer } from "./storeHouseIdx";

const rootReducer = combineReducers({
  addHostingReducer,
  loginReducer,
  openSearchBarReducer,
  searchHouseReducer,
  storeHouseIdxReducer,
});

export default rootReducer;
