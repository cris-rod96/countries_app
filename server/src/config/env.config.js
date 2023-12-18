import dotenv from "dotenv";
dotenv.config();

const {
  SERVER_PORT,
  DB_HOST,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  SECRET_KEY,
  GMAIL_SECRET_EMAIL,
  GMAIL_SECRET_PASSWORD,
} = process.env;

export default {
  SERVER_PORT,
  DB_HOST,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  SECRET_KEY,
  GMAIL_SECRET_EMAIL,
  GMAIL_SECRET_PASSWORD,
};
