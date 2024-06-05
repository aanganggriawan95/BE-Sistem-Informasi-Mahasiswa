import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Matakuliah = db.define(
    "matakuliah",
    {
      nama: {
        type: DataTypes.STRING,
      },
      jam: {
        type: DataTypes.STRING,
      },
      id_kelas: {
        type: DataTypes.INTEGER,
      },
      id_dosen: {
        type: DataTypes.INTEGER,
      },
    },
    {
      freezeTableName: true,
    }
  );
  
  export default Matakuliah;