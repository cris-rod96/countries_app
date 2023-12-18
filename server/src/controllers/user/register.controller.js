import connection from "../../database/connection.js";
import helpers from "../../helpers/index.helpers.js";
import randomstring from "randomstring";
const { User } = connection.models;

const { hashPassword } = helpers.bcryptHelpers;
const { welcomeAndValidate } = helpers.emailHelper;

const main = async (req, res) => {
  try {
    const { email, password } = req.body;
    const passwordHashed = hashPassword(password);
    const validationCode = randomstring.generate(30);
    const user = await User.create({
      ...req.body,
      password: passwordHashed,
      validationCode,
    });

    await welcomeAndValidate(email, validationCode);

    return res.status(user ? 200 : 400).json(
      user
        ? {
            message:
              "Usuario creado. Verifique su correo para completar su registro",
          }
        : {
            message:
              "Error al crear usuario. Intente de nuevo o contacte con una administrador",
          }
    );
  } catch ({ message }) {
    return res.status(500).json({ message });
  }
};

export default main;
