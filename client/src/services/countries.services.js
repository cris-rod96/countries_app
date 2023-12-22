import axios from "axios";
import config from "../config/config";
const { URL_BACK } = config;

const getCountries = async () => {
  const { data } = await axios(`${URL_BACK}/countries/list/all`);
  return data;
};

const getByName = async (name) => {
  const { data } = await axios(
    `${URL_BACK}/countries/list/country?name=${name}`
  );
  return data;
};

export default {
  getCountries,
  getByName,
};
