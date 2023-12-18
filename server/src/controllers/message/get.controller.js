import connection from "../../database/connection.js";
const { Message } = connection.models;

const all = async (req, res) => {
  try {
    const messages = await Message.findAll({});
    return res.status(200).json({
      messages,
      total: messages.length,
    });
  } catch ({ message }) {
    return res.status(500).json({ message });
  }
};

const byID = async (req, res) => {
  try {
    const { id } = req.params;
    const message = await Message.findByPk(id);

    return res
      .status(message ? 200 : 404)
      .json(message ? message : { message: "Mensaje no encontrado" });
  } catch ({ message }) {
    return res.status(500).json({ message });
  }
};

const byUser = async (req, res) => {
  try {
    const { email } = req.query;
    const messages = await Message.findAll({
      where: {
        from: email,
      },
    });

    return res.status(200).json({
      messages,
      total: messages.length,
    });
  } catch ({ message }) {
    return res.status(500).json({ message });
  }
};

const byStatus = async (req, res) => {
  try {
    const { status } = req.query;
    const messages = await Message.findAll({
      where: {
        isChecked: status,
      },
    });

    return res.status(200).json({
      messages,
      total: messages.length,
    });
  } catch ({ message }) {
    return res.status(500).json({ message });
  }
};

export default {
  all,
  byID,
  byUser,
  byStatus,
};
