import express from "express";
import db from "./config/Database.js";
import router from "./route/index.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
// import Users from "./models/UserModel.js";
// import mahasiswa from "./models/MahasiswaModel.js";
// import Berita from "./models/Berita.js";
import Matakuliah from "./models/Mk.js";
// import Kelas from "./models/Kelas.js";

dotenv.config();
const app = express();

try {
  await db.authenticate();
  console.log("Database Connected...");
  // await Users.sync();
} catch (error) {
  console.log(error);
}

try {
  await db.createSchema();
  // await Berita.sync();

  // await mahasiswa.sync();
  await Matakuliah.sync();
  // await Kelas.sync()
} catch (error) {
  console.log(error);
}

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(5000, () => console.log("Server runing on port 5000"));
