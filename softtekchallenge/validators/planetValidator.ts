import Joi from "joi";

export const planetSchema = Joi.object({
  planetId: Joi.number().required(),
  nombre: Joi.string().required(),
  periodo_de_rotacion: Joi.string().required(),
  periodo_orbital: Joi.string().required(),
  diametro: Joi.string().required(),
  clima: Joi.string().required(),
  gravedad: Joi.string().required(),
  terreno: Joi.string().required(),
  agua_superficial: Joi.string().required(),
  poblacion: Joi.string().required(),
  residentes: Joi.array().items(Joi.string().uri()).required(),
  peliculas: Joi.array().items(Joi.string().uri()).required(),
  creado: Joi.string().isoDate().required(),
  editado: Joi.string().isoDate().required(),
  url: Joi.string().uri().required(),
});
