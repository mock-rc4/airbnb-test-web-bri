import { IS_LOGIN, INPUT_USERINDEX } from "../actions/login";

const initailState = {
  loginState: false,
  userIdx: "",
};
export const loginReducer = (state = initailState, action) => {
  switch (action.type) {
    case IS_LOGIN:
      return {
        ...state,
        loginState: action.loginState,
      };
    case INPUT_USERINDEX:
      return {
        ...state,
        userIdx: action.userIdx,
      };
    default:
      return state;
  }
};
