export const STORE_HOUSEIDX = "storeHouseIdx/STORE_HOUSEIDX";
export const STORE_HOSTIDX = "storeHouseIdx/STORE_HOSTIDX";

export const storeHouseIdx = (houseIdx) => ({
  type: STORE_HOUSEIDX,
  houseIdx: houseIdx,
});

export const storeHostIdx = (hostIdx) => ({
  type: STORE_HOSTIDX,
  hostIdx: hostIdx,
});
