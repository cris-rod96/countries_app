import connection from "../../database/connection.js";
import emailHelper from "../../helpers/email.helper.js";
import randomstring from "randomstring";
const { User } = connection.models;

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (user) {
      const code = randomstring.generate(6).toUpperCase();
      await emailHelper.sendCode(email, code);
      user.codeRecovery = code;

      await user.save();
      return res.status(200).json({
        message: `Se ha enviado un código de verificación a ${email}. Revise su bandeja de entrada e ingrese el código para reestablecer su contraseña`,
      });
    } else {
      return res.status(404).json({
        message:
          "El email ingresado actualmente no se encuentra registrado. Verifique la dirección e intente de nuevo.",
      });
    }
  } catch ({ message }) {
    return res.status(500).json({
      message,
    });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { email, password, code } = req.body;
    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (user) {
      if (user.codeRecovery === code) {
        const newPassword = bcryptHelper.hashPassword(password);
        user.password = newPassword;
        user.codeRecovery = null;
        await user.save();
        return res.status(200).json({
          message: "Contraseña cambiada exitosamente",
        });
      } else {
        return res.status(401).json({
          message: "Código no válido",
        });
      }
    } else {
      return res.status(404).json({
        message: "Usuario no encontrado",
      });
    }
  } catch ({ message }) {
    return res.status(500).json({ message });
  }
};

export default {
  forgotPassword,
  resetPassword,
};
