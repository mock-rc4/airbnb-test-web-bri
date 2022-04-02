import { STORE_HOUSEIDX } from "../actions/storeHouseIdx";
import { STORE_HOSTIDX } from "../actions/storeHouseIdx";

const initailState = { houseIdx: "", hostIdx: "" };

export const storeHouseIdxReducer = (state = initailState, action) => {
  switch (action.type) {
    case STORE_HOUSEIDX:
      return {
        ...state,
        houseIdx: action.houseIdx,
      };
    case STORE_HOSTIDX:
      return {
        ...state,
        hostIdx: action.hostIdx,
      };

    default:
      return state;
  }
};
