import express from "express";
import serverless from "serverless-http";
import planetController from "./controllers/planetController";
import swapiController from "./controllers/swapiController";
import translateController from "./controllers/translateController.ts";
import filmController from "./controllers/filmController";

const app = express();
app.use(express.json());
app.use("/swapi", swapiController);
app.use("/translate", translateController);
app.use("/films", filmController);
app.use("/planets", planetController);

app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

export const handler = serverless(app);
