import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Berita = db.define(
  "berita",
  {
    judul: {
      type: DataTypes.STRING,
    },
    img: {
      type: DataTypes.BLOB,
    },
    isi: {
      type: DataTypes.TEXT,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Berita;
