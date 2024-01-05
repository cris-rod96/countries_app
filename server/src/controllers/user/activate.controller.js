import connection from "../../database/connection.js";
const { User } = connection.models;
import randomstring from "randomstring";

const main = async (req, res) => {
  try {
    const { code, email } = req.body;
    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (user) {
      if (user.validationCode === code) {
        user.isActive = true;
        user.validationCode = randomstring.generate(30);
        await user.save();
        return res.status(200).json({
          message:
            "Su cuenta ha sido activada con éxito. Este código solo es válido una vez",
        });
      }

      return res.status(400).json({
        message: "El código de activación no es un código válido",
      });
    }
    return res.status(404).json({
      message: "Usuario no válido",
    });
  } catch (error) {}
};

export default main;
