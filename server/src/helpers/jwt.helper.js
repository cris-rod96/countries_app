import jwt from "jsonwebtoken";
import config from "../config/env.config.js";
const { SECRET_KEY } = config;
const generateToken = (payload) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: "3h" });
};

const verifyToken = (token) => {
  return jwt.verify(token, SECRET_KEY);
};

export default {
  generateToken,
  verifyToken,
};
