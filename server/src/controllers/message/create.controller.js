import connection from "../../database/connection.js";

const { Message } = connection.models;

const main = async (req, res) => {
  try {
    const { id } = req.user;
    const message = await Message.create({
      ...req.body,
      userId: id,
    });
    return res
      .status(message ? 200 : 400)
      .json(
        message
          ? { message: "Mensaje entregado con éxito" }
          : { message: "Error al enviar el mensaje" }
      );
  } catch ({ message }) {
    return res.status(500).json({ message });
  }
};

export default main;
