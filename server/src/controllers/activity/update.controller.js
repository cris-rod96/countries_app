import connection from "../../database/connection.js";
const { Activity } = connection.models;

const main = async (req, res) => {
  try {
    const { id } = req.params;
    const updateActivity = await Activity.update(
      {
        ...req.body,
      },
      {
        where: {
          id,
        },
      }
    );

    return res.status(updateActivity ? 200 : 404).json({
      message: updateActivity
        ? "Actualización realizada exitosamente"
        : "No se ha podido realizar la actualización",
    });
  } catch ({ message }) {
    return res.status(500).json({
      message,
    });
  }
};

export default main;
