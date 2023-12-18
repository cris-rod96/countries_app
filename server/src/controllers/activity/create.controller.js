import connection from "../../database/connection.js";
const { Activity } = connection.models;

const main = async (req, res) => {
  try {
    const { countries } = req.body;
    const activity = await Activity.create({ ...req.body });
    await activity.addCountry(countries);
    return res
      .status(200)
      .json({ message: "La actividad ha sido creado exitosamente" });
  } catch ({ message }) {
    return res.status(500).json({ message });
  }
};

export default main;
