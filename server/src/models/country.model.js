import { DataTypes } from "sequelize";

const model = (sequelize) => {
  sequelize.define(
    "Country",
    {
      id: {
        type: DataTypes.STRING(3),
        allowNull: false,
        primaryKey: true,
      },

      commonName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      officialName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      capital: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      continent: {
        type: DataTypes.ENUM,
        values: [
          "Africa",
          "Antarctica",
          "Asia",
          "Europe",
          "North America",
          "Oceania",
          "South America",
        ],
        allowNull: false,
      },
      population: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      area: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },

      flag: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUrl: {
            args: true,
            msg: "La URL de la bandera no es una URL válida",
          },
        },
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUrl: {
            args: true,
            msg: "La URL del mapa no es una URL válida",
          },
        },
      },
    },
    {
      timestamps: false,
    }
  );
};

export default model;
