import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const mahasiswa = db.define(
  "mahasiswa",
  {
    name: {
      type: DataTypes.STRING(50), // Setara dengan VARCHAR(100)
      allowNull: false,
    },
    nim: {
      type: DataTypes.STRING(20), // Setara dengan VARCHAR(20)
      allowNull: false,
      unique: true,
    },
    tl: {
      type: DataTypes.STRING(50), // Setara dengan VARCHAR(100)
      allowNull: false,
    },
    tg_lahir: {
      type: DataTypes.DATEONLY, // Tanggal tanpa waktu
      allowNull: false,
    },
    agama: {
      type: DataTypes.STRING(20), // Setara dengan VARCHAR(50)
      allowNull: false,
    },
    jk: {
      type: DataTypes.ENUM("L", "P"), // Enum untuk jenis kelamin, misalnya 'L' untuk laki-laki, 'P' untuk perempuan
      allowNull: false,
    },
    alamat: {
      type: DataTypes.STRING(50), // Enum untuk jenis kelamin, misalnya 'L' untuk laki-laki, 'P' untuk perempuan
      allowNull: false,
    },
    no_tel: {
      type: DataTypes.STRING(20), // Enum untuk jenis kelamin, misalnya 'L' untuk laki-laki, 'P' untuk perempuan
      allowNull: false,
    },
    id_jurusan: {
      type: DataTypes.STRING(20), // Enum untuk jenis kelamin, misalnya 'L' untuk laki-laki, 'P' untuk perempuan
      allowNull: false,
      unique: true,
    },
  },
  {
    freezeTableName: true, // Menggunakan nama tabel persis seperti yang didefinisikan
    timestamps: false, // Tidak menambahkan kolom createdAt dan updatedAt
  }
);

export default mahasiswa;
