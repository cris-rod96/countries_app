import nodemailer from "nodemailer";
import env from "../config/env.config.js";
import fs from "fs";

const { GMAIL_SECRET_EMAIL, GMAIL_SECRET_PASSWORD } = env;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: GMAIL_SECRET_EMAIL,
    pass: GMAIL_SECRET_PASSWORD,
  },
});

const welcomeAndValidate = async (emailTo, validationCode) => {
  try {
    const html = fs
      .readFileSync("./src/templates/welcome.html")
      .toString()
      .replace("${dynamicLink}", validationCode);

    const mailOptions = {
      from: GMAIL_SECRET_EMAIL,
      to: emailTo,
      subject: "¡Bienvenido a Countries App! Confirma tu registro",
      html,
    };

    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    throw new Error(error);
  }
};

const loginNotification = async (emailTo, user, date) => {
  try {
    const html = fs
      .readFileSync("./src/templates/login.html")
      .toString()
      .replace("${user}", user)
      .replace("${date}", date);

    const mailOptions = {
      from: GMAIL_SECRET_EMAIL,
      to: emailTo,
      subject: "Notificación de Inicio de Sesión",
      html,
    };

    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    throw new Error(error);
  }
};

export default {
  welcomeAndValidate,
  loginNotification,
};
