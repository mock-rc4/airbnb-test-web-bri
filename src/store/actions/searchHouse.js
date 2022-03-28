//1. 액션 타입 만들기
export const ADD_LOCATION = "searchHouse/ADD_LOCATION";
export const ADD_CHECKIN = "addHosting/ADD_CHECKIN";
export const ADD_CHECKOUT = "addHosting/ADD_CHECKOUT";
export const ADD_PEOPLE = "addHosting/ADD_PEOPLE";

export const addLocation = (location) => ({
  type: ADD_LOCATION,
  location,
});

export const addCheckIn = (checkin) => ({
  type: ADD_CHECKIN,
  checkin,
});

export const addCheckOut = (checkout) => ({
  type: ADD_CHECKOUT,
  checkout,
});

export const addPeople = (people) => ({
  type: ADD_PEOPLE,
  people,
});
