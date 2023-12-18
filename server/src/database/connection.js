import { Sequelize } from "sequelize";
import models from "../models/index.models.js";
import env from "../config/env.config.js";

const { ActivityModel, CountryModel, MessageModel, UserModel } = models;
const { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } = env;
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/${DB_NAME}`,
  { logging: false }
);

ActivityModel(sequelize);
CountryModel(sequelize);
MessageModel(sequelize);
UserModel(sequelize);

const { User, Activity, Country, Message } = sequelize.models;

User.hasMany(Activity, {
  foreignKey: "userId",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});
Activity.belongsTo(User, {
  foreignKey: "userId",
});

User.hasMany(Message, {
  foreignKey: "userId",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});
Message.belongsTo(User, {
  foreignKey: "userId",
});

Country.belongsToMany(Activity, {
  through: "Country_Activity",
});
Activity.belongsToMany(Country, {
  through: "Country_Activity",
});

export default {
  conn: sequelize,
  models: {
    Activity,
    Country,
    Message,
    User,
  },
};
