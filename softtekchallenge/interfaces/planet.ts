export interface Planet {
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
  creado: string; // ISO 8601 date string
  editado: string; // ISO 8601 date string
  url: string; // URL to the planet resource
}
