export interface CreateFilmDTO {
  filmId: number;
  titulo: string;
  episodio_id: number;
  apertura: string;
  director: string;
  productor: string;
  fecha_de_lanzamiento: string;
  personajes: string[]; // Array of URLs to character resources
  planetas: string[]; // Array of URLs to planet resources
  naves_estelares: string[]; // Array of URLs to starship resources
  vehiculos: string[]; // Array of URLs to vehicle resources
  especies: string[]; // Array of URLs to species resources
  creado: string;
  editado: string;
  url: string;
}
