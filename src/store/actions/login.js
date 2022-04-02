//1. 액션 타입 설정
export const IS_LOGIN = "login/IS_LOGIN";
export const IS_LOGOUT = "login/IS_LOGOUT";
export const INPUT_USERINDEX = "login/INPUT_USERINDEX";

//2. 액션 생성함수
export const isLogin = (loginState) => ({
  type: IS_LOGIN,
  loginState: loginState,
});
//loginstate 를 true 로 바꿔줘야함. 직접적으로
//로그아웃 액션 만들어줘
//최상위에서 로그인 스테이트를 불러와서 처리

export const inputUserIndex = (userIdx) => ({
  type: INPUT_USERINDEX,
  userIdx: userIdx,
});
