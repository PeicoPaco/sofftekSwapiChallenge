import express from "express";
import serverless from "serverless-http";
import planetController from "./controllers/planetController";
import swapiController from "./controllers/swapiController";
import translateController from "./controllers/translateController";
import filmController from "./controllers/filmController";

// Films handler
const filmsApp = express();
filmsApp.use(express.json());
filmsApp.use("/fims", filmController);
filmsApp.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});
export const films = serverless(filmsApp);

// Planets handler
const planetsApp = express();
planetsApp.use(express.json());
planetsApp.use("/planets", planetController);
planetsApp.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});
export const planets = serverless(planetsApp);

// Other handlers (if needed)
// For example, SWAPI and Translate handlers can also be defined similarly
const swapiApp = express();
swapiApp.use(express.json());
swapiApp.use("/swapi", swapiController);
swapiApp.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});
export const swapi = serverless(swapiApp);

const translateApp = express();
translateApp.use(express.json());
translateApp.use("/translate", translateController);
translateApp.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});
export const translate = serverless(translateApp);
