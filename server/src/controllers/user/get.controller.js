import connection from "../../database/connection.js";
const { User } = connection.models;

const all = async (req, res) => {
  try {
    const users = await User.findAll({});
    return res.status(200).json({ users, total: users.length });
  } catch ({ message }) {
    return res.status(500).json({ message });
  }
};

const byID = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    return res
      .status(user ? 200 : 404)
      .json(user ? user : { message: "Usuario no encontrado" });
  } catch ({ message }) {
    return res.status(500).json({ message });
  }
};

export default {
  all,
  byID,
};
