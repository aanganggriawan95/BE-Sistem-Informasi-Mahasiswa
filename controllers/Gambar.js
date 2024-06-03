import Berita from "../models/Berita.js";
export const DataBerita = async (req, res) => {
  try {
    const beritas = await Berita.findAll();
    const formattedBeritas = beritas.map((berita) => {
      return {
        ...berita.toJSON(),
        img: berita.img
          ? `data:image/jpeg;base64,${berita.img.toString("base64")}`
          : null,
      };
    });
    res.json(formattedBeritas);
  } catch (error) {
    console.error("Error fetching berita:", error);
    res.status(500).send("Internal Server Error");
  }
};
