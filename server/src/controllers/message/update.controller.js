import connection from "../../database/connection.js";

const { Message } = connection.models;

const main = async (req, res) => {
  try {
    const { id } = req.params;
    const { isChecked } = req.body;

    const updatedMessage = await Message.update(
      {
        isChecked,
      },
      {
        where: {
          id,
        },
      }
    );

    return res.status(updatedMessage ? 200 : 400).json({
      message: updatedMessage
        ? "Estado actualizado correctamente"
        : "No se pudo actualizar el estado",
    });
  } catch ({ message }) {
    return res.status(500).json({ message });
  }
};
