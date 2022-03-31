import { combineReducers } from "redux";
import { addHostingReducer } from "./addHosting";
import { loginReducer } from "./login";
import { openSearchBarReducer } from "./openSearchBar";
import { searchHouseReducer } from "./searchHouse";
import { storeHouseIdxReducer } from "./storeHouseIdx";
import { filterReducer } from "./filter";

const rootReducer = combineReducers({
  addHostingReducer,
  loginReducer,
  openSearchBarReducer,
  searchHouseReducer,
  storeHouseIdxReducer,
  filterReducer,
});

export default rootReducer;
