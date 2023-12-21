import cookie from "js-cookie";

const saveCookie = (token) => {
  cookie.set("token", token, {
    expires: 3 / 24,
  });
};

const getCookie = (name) => {
  return cookie.get(name);
};

export default {
  saveCookie,
  getCookie,
};
