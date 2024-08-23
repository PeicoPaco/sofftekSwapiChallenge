import express, { Request, Response } from "express";
import { translateKeys } from "../services/translationService";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const { resource, data, id } = req.body;

    // Validate that resource and data are provided
    if (!resource || !data) {
      return res
        .status(400)
        .json({ error: "Resource and data fields are required." });
    }

    // Translate the data using the translateKeys function
    const translatedData = translateKeys(data, resource, id);

    // Respond with the translated data
    res.json({ id, resource, data: translatedData });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while processing the translation." });
  }
});

export default router;
