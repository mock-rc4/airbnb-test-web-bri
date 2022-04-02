import {
  ADD_BIGTYPE,
  ADD_SMALLTYPE,
  ADD_ADDRESS,
  ADD_GUEST,
  ADD_BED,
  ADD_ROOM,
  ADD_BATH,
  ADD_IMAGE,
  ADD_NAME,
  ADD_CONTENT,
  ADD_PRICE,
} from "../actions/addHosting";

const initailState = "";

export const addHostingReducer = (state = initailState, action) => {
  switch (action.type) {
    case ADD_BIGTYPE:
      return {
        ...state,
        bigType: action.bigType,
      };
    case ADD_SMALLTYPE:
      return {
        ...state,
        smallType: action.smallType,
      };
    case ADD_ADDRESS:
      return {
        ...state,
        address: action.addrIdx,
      };
    case ADD_GUEST:
      return {
        ...state,
        guest: action.guest,
      };
    case ADD_BED:
      return {
        ...state,
        bed: action.bed,
      };
    case ADD_ROOM:
      return {
        ...state,
        room: action.room,
      };
    case ADD_BATH:
      return {
        ...state,
        bath: action.bath,
      };
    case ADD_IMAGE:
      return {
        ...state,
        image: action.image,
      };
    case ADD_NAME:
      return {
        ...state,
        name: action.name,
      };
    case ADD_CONTENT:
      return {
        ...state,
        content: action.content,
      };
    case ADD_PRICE:
      return {
        ...state,
        price: action.price,
      };
    default:
      return state;
  }
};
