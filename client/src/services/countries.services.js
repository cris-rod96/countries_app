import axios from "axios";
import config from "../config/config";
const { URL_BACK } = config;

const getCountries = async () => {
  const data = await axios(`${URL_BACK}/countries/list/all`);
  console.log(data);
};

export default {
  getCountries,
};
