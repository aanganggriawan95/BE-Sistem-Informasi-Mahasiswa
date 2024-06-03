import express from "express";
import { getUser, Register, Login, Logout } from "../controllers/User.js";
import { Mhs } from "../controllers/Mahasiswa.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { refreshToken } from "../controllers/refreshToken.js";
import { DataBerita } from "../controllers/Gambar.js";

const router = express.Router();

router.get("/users", verifyToken, getUser);
router.get("/mhs", Mhs);
router.post("/users", Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);
router.get("/berita", DataBerita);

export default router;
