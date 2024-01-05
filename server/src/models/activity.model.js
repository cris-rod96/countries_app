import { Sequelize, DataTypes } from "sequelize";
const model = (sequelize) => {
  sequelize.define(
    "Activity",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      difficulty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: {
            args: 1,
            msg: "El valor de dificultad debe ser mayor a 0",
          },
          max: {
            args: 5,
            msg: "El valor de dificultad debe ser menor o igual a 5",
          },
        },
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: {
            args: 1,
            msg: "El valor de dificultad debe ser mayor a 0",
          },
          max: {
            args: 24,
            msg: "El valor de dificultad debe ser menor o igual a 5",
          },
        },
      },
      season: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ["Invierno", "Otoño", "Primavera", "Verano"],
      },

      isCompleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },

      createdAt: {
        type: DataTypes.DATEONLY,
        defaultValue: sequelize.literal("CURRENT_DATE"),
      },
    },
    {
      timestamps: false,
    }
  );
};

export default model;
