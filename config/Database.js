import { Sequelize } from "sequelize";
const db = new Sequelize("sim", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
