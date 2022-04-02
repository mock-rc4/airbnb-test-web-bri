//1. 액션 타입 만들기
export const ADD_LOCATION = "searchHouse/ADD_LOCATION";
export const ADD_CHECKIN = "addHosting/ADD_CHECKIN";
export const ADD_CHECKOUT = "addHosting/ADD_CHECKOUT";
export const ADD_PEOPLE = "addHosting/ADD_PEOPLE";
export const ADD_ADULT = "addHosting/ADD_ADULT";
export const ADD_KID = "addHosting/ADD_KID";
export const ADD_BABY = "addHosting/ADD_BABY";
export const ADD_PET = "addHosting/ADD_PET";
export const ADD_STAYDAY = "addHosting/ADD_STAYDAY";

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

export const addAdult = (adult) => ({
  type: ADD_ADULT,
  adult,
});

export const addKid = (kid) => ({
  type: ADD_KID,
  kid,
});

export const addBaby = (baby) => ({
  type: ADD_BABY,
  baby,
});

export const addPet = (pet) => ({
  type: ADD_PET,
  pet,
});

export const addStayDay = (checkin, checkout) => ({
  type: ADD_STAYDAY,
  checkin,
  checkout,
});
