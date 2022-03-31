export const FILTER_KEYWORD = "login/FILTER_KEYWORD";

export const filterKeyword = (keyword) => ({
  type: FILTER_KEYWORD,
  keyword: keyword,
});
