import connection from "../../database/connection.js";
const { User } = connection.models;

const main = async (req, res) => {
  try {
    const { id } = req.params;
    const userDelete = await User.destroy({
      where: {
        id,
      },
    });

    return res
      .status(userDelete > 0 ? 200 : 404)
      .json(
        userDelete > 0
          ? { message: "Usuario eliminado correctamente" }
          : { message: "Error al intentar eliminar el usuario" }
      );
  } catch ({ message }) {
    return res.status(500).json({ message });
  }
};

export default main;
