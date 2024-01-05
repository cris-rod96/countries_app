import { request, response } from "express";
import connection from "../database/connection.js";
import helpers from "../helpers/index.helpers.js";

const { User } = connection.models;
const { jwtHelpers } = helpers;
const isValidToken = async (req = request, res = response, next) => {
  const token = req.headers["x-token"];

  console.log(token);
  if (!token)
    return res
      .status(401)
      .json({ message: "Acceso no autorizado. Debes iniciar sesión" });

  const { id } = jwtHelpers.verifyToken(token);
  const user = await User.findByPk(id);

  if (!user) return res.status(401).json({ message: "Token no válido" });

  req.user = user;
  next();
};

const isAdmin = async (req = request, res = response, next) => {
  const user = req.user;
  if (user.rol !== "Administrador") {
    return res.status(401).json({
      message: `Acción no permitida. ${user.name} no cuenta con los permisos necesarios para realizar esta acción`,
    });
  }
  next();
};

export default {
  isValidToken,
  isAdmin,
};
