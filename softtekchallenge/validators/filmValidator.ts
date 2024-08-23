import Joi from "joi";

export const filmSchema = Joi.object({
  filmId: Joi.number().required(),
  titulo: Joi.string().required(),
  episodio_id: Joi.number().required(),
  apertura: Joi.string().required(),
  director: Joi.string().required(),
  productor: Joi.string().required(),
  fecha_de_lanzamiento: Joi.string().isoDate().required(),
  personajes: Joi.array().items(Joi.string().uri()).required(),
  planetas: Joi.array().items(Joi.string().uri()).required(),
  naves_estelares: Joi.array().items(Joi.string().uri()).required(),
  vehiculos: Joi.array().items(Joi.string().uri()).required(),
  especies: Joi.array().items(Joi.string().uri()).required(),
  creado: Joi.string().isoDate().required(),
  editado: Joi.string().isoDate().required(),
  url: Joi.string().uri().required(),
});
