import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Users = db.define(
  "user",
  {
    name: {
      type: DataTypes.STRING,
    },
    nim: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    refreh_token: {
      type: DataTypes.TEXT,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Users;
