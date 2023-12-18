import express from "express";
import cors from "cors";
import routes from "./routes/index.routes.js";
const server = express();

server.use(express.json());
server.use(cors());

server.use("/api/v1", routes);

export default server;
