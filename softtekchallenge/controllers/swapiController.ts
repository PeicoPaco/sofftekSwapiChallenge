import express, { Request, Response } from "express";
import { fetchDataFromSwapi } from "../services/swapiService";

const router = express.Router();

router.get("/:resource/:id", async (req: Request, res: Response) => {
  try {
    const { resource, id } = req.params;
    const data = await fetchDataFromSwapi(resource, id);
    if (data) {
      res.json(data);
    } else {
      res
        .status(404)
        .json({ error: `Could not find ${resource} with ID ${id} in SWAPI` });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Could not connect to SWAPI" });
  }
});

export default router;
