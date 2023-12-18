import bcrypt from "bcrypt";
const SALT_ROUNDS = 13;

const hashPassword = (password) => {
  return bcrypt.hashSync(password, SALT_ROUNDS);
};

const verifyPassword = (password, passwordHashed) => {
  return bcrypt.compareSync(password, passwordHashed);
};

export default {
  hashPassword,
  verifyPassword,
};
