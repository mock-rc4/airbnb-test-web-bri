import { FILTER_KEYWORD } from "../actions/filter";

const initailState = {
  keyword: "",
};

export const filterReducer = (state = initailState, action) => {
  switch (action.type) {
    case FILTER_KEYWORD:
      return {
        ...state,
        keyword: action.keyword,
      };

    default:
      return state;
  }
};
