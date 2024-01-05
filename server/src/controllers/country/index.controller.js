import { Op } from "sequelize";
import connection from "../../database/connection.js";
const { Country, Activity } = connection.models;

const all = async (req, res) => {
  try {
    const countries = await Country.findAll({
      include: [Activity],
    });
    return res.status(200).json({
      countries,
      total: countries.length,
    });
  } catch ({ message }) {
    return res.status(500).json({ message });
  }
};

const byID = async (req, res) => {
  try {
    const { id } = req.params;

    const country = await Country.findByPk(id, {
      include: [Activity],
    });

    return res
      .status(country ? 200 : 404)
      .json(country ? 200 : { message: "País no encontrado" });
  } catch ({ message }) {
    return res.status(500).json({ message });
  }
};

const byName = async (req, res) => {
  try {
    const { name } = req.query;
    const countries = await Country.findAll({
      where: {
        commonName: {
          [Op.iLike]: `%${name}%`,
        },
      },
      include: [Activity],
    });
    return res.status(200).json({
      countries,
      total: countries.length,
    });
  } catch ({ message }) {
    return res.status(500).json({ message });
  }
};

export default {
  all,
  byID,
  byName,
};
