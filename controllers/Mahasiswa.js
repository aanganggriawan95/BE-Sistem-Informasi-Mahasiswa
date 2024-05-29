import mahasiswa from "../models/MahasiswaModel.js";
export const Mhs = async (req, res) => {
  try {
    const Mahasiswa = await mahasiswa.findAll({
      attributes: ["name", "nim", "tl", "tg_lahir", "agama", "jk", "alamat"],
    });

    res.json(Mahasiswa);
  } catch (error) {
    console.log(error);
  }
};
