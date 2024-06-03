import Matakuliah from "../models/Mk";
export const Mk = async (req, res) => {
  try {
    const Mk = await Matakuliah.findAll({
      attributes: ["name", "id_kelas", "id_dosen"],
    });

    res.json(Mahasiswa);
  } catch (error) {
    console.log(error);
  }
};
