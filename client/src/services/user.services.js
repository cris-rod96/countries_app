import axios from "axios";
import config from "../config/config";
import storage from "../utils/storage.js";
const { URL_BACK } = config;

const handleSubmit = async (route, values) => {
  const { data } = await axios.post(`${URL_BACK}/${route}`, {
    ...values,
  });

  return data;
};

const validationAccount = async (code) => {
  const temp_email = storage.getStorage("temp_email");
  const { data } = await axios.put(`${URL_BACK}/users/activate`, {
    code,
    email: temp_email,
  });

  return data;
};

export default {
  handleSubmit,
  validationAccount,
};
