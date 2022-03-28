import { OPEN_SEARCHBAR } from "../actions/openSearchBar";

const initailState = {
  isOpen: true,
};

export const openSearchBarReducer = (state = initailState, action) => {
  switch (action.type) {
    case OPEN_SEARCHBAR:
      return {
        ...state,
        isOpen: action.isOpen,
      };
    default:
      return state;
  }
};
