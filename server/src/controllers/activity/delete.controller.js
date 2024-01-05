import connection from "../../database/connection.js";
const { Activity } = connection.models;

const main = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteActivity = await Activity.destroy({
      where: {
        id,
      },
    });

    return res.status(deleteActivity ? 200 : 404).json({
      message: deleteActivity
        ? "La actividad ha sido eliminada exitosamente"
        : "Error. Actividad no encontrada",
    });
  } catch ({ message }) {
    return res.status(500).json({ message });
  }
};

export default main;
