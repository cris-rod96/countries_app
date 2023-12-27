const saveStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

const removeStorage = (key) => {
  localStorage.removeItem(key);
};

export default {
  saveStorage,
  getStorage,
  removeStorage,
};
