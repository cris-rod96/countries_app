import cookie from "js-cookie";

const saveCookie = (name, token) => {
  cookie.set(name, token, {
    expires: 3 / 24,
  });
};

const getCookie = (name) => {
  return cookie.get(name);
};

const removeCookie = (name) => {
  cookie.remove(name);
};

export default {
  saveCookie,
  getCookie,
  removeCookie,
};
