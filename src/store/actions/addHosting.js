//1. 액션 타입 만들기
export const ADD_BIGTYPE = "addHosting/ADD_BIGTYPE";
export const ADD_SMALLTYPE = "addHosting/ADD_SMALLTYPE";
export const ADD_ADDRESS = "addHosting/ADD_ADDRESS";
export const ADD_GUEST = "addHosting/ADD_GUEST";
export const ADD_BED = "addHosting/DD_BED";
export const ADD_ROOM = "addHosting/ADD_ROOM";
export const ADD_BATH = "addHosting/ADD_BATH";
export const ADD_IMAGE = "addHosting/ADD_IMAGE";
export const ADD_NAME = "addHosting/ADD_NAME";
export const ADD_CONTENT = "addHosting/ADD_CONTENT";
export const ADD_PRICE = "addHosting/ADD_PRICE";

//2. 엑션 생성 함수
//bigType(property)
export const addBigType = (bigType) => ({
  type: ADD_BIGTYPE,
  bigType,
});

//smallType(privacy)
export const addSmallType = (smallType) => ({
  type: ADD_SMALLTYPE,
  smallType,
});

//주소 인덱스 값
export const addAddress = (addrIdx) => ({
  type: ADD_ADDRESS,
  addrIdx,
});

//게스트 수
export const addGuest = (guest) => ({
  type: ADD_GUEST,
  guest,
});

//침대 개수
export const addBed = (bed) => ({
  type: ADD_BED,
  bed,
});

//침실 개수
export const addRoom = (room) => ({
  type: ADD_ROOM,
  room,
});

//욕실 개수
export const addBath = (bath) => ({
  type: ADD_BATH,
  bath,
});

//숙소 사진
export const addImage = (image) => ({
  type: ADD_IMAGE,
  image,
});

//숙소 이름
export const addName = (name) => ({
  type: ADD_NAME,
  name,
});

//숙소 설명
export const addContent = (content) => ({
  type: ADD_CONTENT,
  content,
});

//숙소 가격
export const addPrice = (price) => ({
  type: ADD_PRICE,
  price,
});
