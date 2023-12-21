import axios from "axios";
import config from "../config/config";
const { URL_BACK } = config;

const getCountries = async () => {
  const data = await axios(U);
  console.log(data);
};

export default {
  getCountries,
};
