import connection from "../../database/connection.js";
import helpers from "../../helpers/index.helpers.js";
const { verifyPassword } = helpers.bcryptHelpers;
const { generateToken } = helpers.jwtHelpers;
const { loginNotification } = helpers.emailHelper;

const { User } = connection.models;

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (user) {
      if (user.isActive && !user.isDeleted) {
        const passwordHashed = verifyPassword(password, user.password);
        if (passwordHashed) {
          const token = generateToken({
            id: user.id,
            email: user.email,
          });
          await loginNotification(
            email,
            user.name,
            new Date().toLocaleString()
          );
          return res.status(200).json({
            user: {
              id: user.id,
              name: user.name,
              email: user.email,
              rol: user.rol,
            },
            token,
          });
        }

        return res.status(401).json({
          message: "Credenciales incorrectas",
        });
      }
      return res.status(401).json({
        message: "Usuario no válido.",
      });
    }

    return res.status(401).json({
      message: "Credenciales incorrectas",
    });
  } catch ({ message }) {
    return res.status(500).json({ message });
  }
};

export default {
  login,
};
