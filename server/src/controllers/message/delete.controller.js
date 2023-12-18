import connection from "../../database/connection.js";

const { Message } = connection.models;

const main = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMessage = await Message.destroy({
      where: {
        id,
      },
    });

    return res.status(deletedMessage ? 200 : 404).json({
      message: deletedMessage
        ? "Mensaje eliminado con éxito"
        : "No se pudo eliminar el mensaje.",
    });
  } catch ({ message }) {
    return res.status(500).json({ message });
  }
};

export default main;
