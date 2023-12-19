import server from "./src/server.js";
import env from "./src/config/env.config.js";
import database from "./src/database/connection.js";

import seed from "./src/scripts/seed.script.js";

const { conn } = database;

const { SERVER_PORT } = env;

conn
  .sync({ logging: false, force: true })
  .then(() => {
    server.listen(SERVER_PORT, () => {
      console.log(`Server escuchando por el puerto: ${SERVER_PORT}`);
    });

    console.log("Base de datos conectada");
    seed();
  })
  .catch((err) => {
    console.log(err);
  });
