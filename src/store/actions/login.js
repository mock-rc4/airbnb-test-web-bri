//1. 액션 타입 설정
export const IS_LOGIN = "login/IS_LOGIN";
export const INPUT_USERINDEX = "login/INPUT_USERINDEX";

//2. 액션 생성함수
export const isLogin = (loginState) => ({
  type: IS_LOGIN,
  loginState: loginState,
});

export const inputUserIndex = (userIdx) => ({
  type: INPUT_USERINDEX,
  userIdx: userIdx,
});
