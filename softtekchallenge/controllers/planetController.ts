import express, { Request, Response } from "express";
import { createPlanet, getPlanetbyId } from "../services/planetService";
import { planetSchema } from "../validators/planetValidator";

const router = express.Router();

router.get("/:planetId", async (req: Request, res: Response) => {
  const planetIdNumber = parseInt(req.params.planetId, 10);
  try {
    const planet = await getPlanetbyId(planetIdNumber);
    if (planet) {
      res.json(planet);
    } else {
      res
        .status(404)
        .json({ error: 'Could not find planet with provided "planetId"' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Could not retrieve planet" });
  }
});

router.post("/", async (req: Request, res: Response) => {
  const { error, value } = planetSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const planet = await createPlanet(value);
    res.json(planet);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Could not create planet" });
  }
});

export default router;
