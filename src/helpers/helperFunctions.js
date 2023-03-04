export const isDecodedJson = (str) => {
  try {
    JSON.parse(decodeURIComponent(str));
  } catch (e) {
    return false;
  }
  return true;
};

export const isJson = (str) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};
