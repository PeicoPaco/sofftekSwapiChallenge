export interface CreatePlanetDTO {
  planetId: number;
  nombre: string;
  periodo_de_rotacion: string;
  periodo_orbital: string;
  diametro: string;
  clima: string;
  gravedad: string;
  terreno: string;
  agua_superficial: string;
  poblacion: string;
  residentes: string[]; // Array of URLs (strings)
  peliculas: string[]; // Array of URLs (strings)
  creado: string;
  editado: string;
  url: string;
}
