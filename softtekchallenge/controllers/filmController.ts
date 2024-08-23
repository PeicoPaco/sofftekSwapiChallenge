import express, { Request, Response } from "express";
import { createFilm, getFilmById } from "../services/filmsService";
import { filmSchema } from "../validators/filmValidator";

const router = express.Router();

router.get("/:filmId", async (req: Request, res: Response) => {
  const filmIdNumber = parseInt(req.params.filmId, 10);
  try {
    const film = await getFilmById(filmIdNumber);
    if (film) {
      res.json(film);
    } else {
      res
        .status(404)
        .json({ error: 'Could not find film with provided "filmId"' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Could not retrieve film" });
  }
});

router.post("/", async (req: Request, res: Response) => {
  const { error, value } = filmSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const film = await createFilm(value);
    res.json(film);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Could not create film" });
  }
});

export default router;
