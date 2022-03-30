import {
  ADD_LOCATION,
  ADD_CHECKIN,
  ADD_CHECKOUT,
  ADD_PEOPLE,
  ADD_STAYDAY,
  ADD_ADULT,
  ADD_KID,
  ADD_BABY,
  ADD_PET,
} from "../actions/searchHouse";

const initailState = {
  location: "",
  checkin: "",
  checkout: "",
  people: 0,
  adult: 0,
  kid: 0,
  baby: 0,
  pet: 0,
  stayDay: "",
};

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
    case ADD_ADULT:
      return {
        ...state,
        adult: action.adult,
      };
    case ADD_KID:
      return {
        ...state,
        kid: action.kid,
      };
    case ADD_BABY:
      return {
        ...state,
        baby: action.baby,
      };
    case ADD_PET:
      return {
        ...state,
        pet: action.pet,
      };
    case ADD_STAYDAY:
      return {
        ...state,
        stayDay:
          (new Date(action.checkout) - new Date(action.checkin)) /
          1000 /
          60 /
          60 /
          24,
      };
    default:
      return state;
  }
};
