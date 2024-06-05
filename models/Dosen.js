import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Dosen = db.define(
  "dosen",
  {
    id_doesen: {
        type: DataTypes.INTEGER,
    },
    nama: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Dosen;
