import { Sequelize, DataTypes } from "sequelize";

const model = (sequelize) => {
  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            args: true,
            msg: "El email ingresado no es válido",
          },
        },
      },
      rol: {
        type: DataTypes.ENUM,
        values: ["Administrador", "Normal"],
        defaultValue: "Normal",
      },
      validationCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      codeRecovery: {
        type: DataTypes.STRING,
      },

      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },

      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      timestamps: false,
    }
  );
};

export default model;
