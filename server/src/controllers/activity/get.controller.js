import { Op } from "sequelize";
import connection from "../../database/connection.js";
const { Activity, Country } = connection.models;

const all = async (req, res) => {
  try {
    const { id } = req.user;
    const activities = await Activity.findAll({
      where: {
        userId: id,
      },
      include: [Country],
      order: [["isCompleted", "ASC"]],
    });
    return res.status(200).json({
      activities,
      total: activities.length,
    });
  } catch ({ message }) {
    return res.status(500).json({ message });
  }
};

const byID = async (req, res) => {
  try {
    const { id } = req.params;
    const activity = await Activity.findByPk(id, {
      include: [Country],
    });
    return res
      .status(activity ? 200 : 404)
      .json(activity ? activity : { message: "Actividad no encontrada" });
  } catch ({ message }) {
    return res.status(500).json({ message });
  }
};

const byStatus = async (req, res) => {
  try {
    const { id } = req.user;
    const { status } = req.body;
    const activities = await Activity.findAll({
      where: {
        userId: id,
        isCompleted: status,
      },
    });

    return res.status(200).json({
      activities,
      total: activities.length,
    });
  } catch ({ message }) {
    return res.status(500).json({ message });
  }
};

const byCountry = async (req, res) => {
  try {
    const { id } = req.user;
    const activities = await Activity.findAll({
      where: {
        userId: id,
      },
    });
  } catch ({ message }) {}
};

const bySeason = async (req, res) => {
  try {
    const { id } = req.user;
    const { season } = req.body;

    const activities = await Activity.findAll({
      where: {
        userId: id,
        season,
      },
    });
    return res.status(200).json({
      activities,
      total: activities.length,
    });
  } catch ({ message }) {
    return res.status(500).json({
      message,
    });
  }
};

const byDescription = async (req, res) => {
  try {
    const { id } = req.user;
    const { description } = req.query;
    const activities = await Activity.findAll({
      where: {
        description: {
          [Op.iLike]: `%${description}%`,
        },
        userId: id,
      },
    });

    return res.status(200).json({
      activities,
      total: activities.length,
    });
  } catch ({ message }) {
    return res.status(500).json({
      message,
    });
  }
};

export default {
  all,
  byCountry,
  byDescription,
  byID,
  bySeason,
  byStatus,
};
