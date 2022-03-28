import {
  ADD_LOCATION,
  ADD_CHECKIN,
  ADD_CHECKOUT,
  ADD_PEOPLE,
} from "../actions/searchHouse";

const initailState = "";

export const searchHouseReducer = (state = initailState, action) => {
  switch (action.type) {
    case ADD_LOCATION:
      return {
        ...state,
        location: action.location,
      };
    case ADD_CHECKIN:
      return {
        ...state,
        checkin: action.checkin,
      };
    case ADD_CHECKOUT:
      return {
        ...state,
        checkout: action.checkout,
      };
    case ADD_PEOPLE:
      return {
        ...state,
        people: action.people,
      };
    default:
      return state;
  }
};
