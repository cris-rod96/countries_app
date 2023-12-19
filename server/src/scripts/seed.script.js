import connection from "../database/connection.js";
import axios from "axios";
const { Country } = connection.models;

const main = async (req, res) => {
  try {
    const { data } = await axios("http://localhost:5000/countries");
    const countriesDB = await Country.count({});
    if (countriesDB === 0) {
      const countries = await data.map((country) => ({
        id: country.cca3,
        commonName: country.name.common,
        officialName: country.name.official,
        capital: country.capital ? country.capital[0] : "NO INFORMATION",
        continent: country.continents[0],
        population: country.population,
        area: country.area,
        flag: country.flags.svg,
        location: country.maps.openStreetMaps,
      }));

      await Country.bulkCreate(countries);
    }
  } catch ({ message }) {
    return res.status(500).json({ message });
  }
};

export default main;
