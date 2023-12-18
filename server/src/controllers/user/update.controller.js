import connection from "../../database/connection.js";
const { User } = connection.models;

const main = async (req, res) => {
  try {
    const { id } = req.params;

    const rows = await User.update(
      { ...req.body },
      {
        where: {
          id,
        },
      }
    );
    return res.status(rows > 0 ? 200 : 400).json({
      message:
        rows > 0 ? "Usuario editado correctamente" : "Usuario no encontrado",
    });
  } catch ({ message }) {
    return res.status(500).json({ message });
  }
};

export default main;
