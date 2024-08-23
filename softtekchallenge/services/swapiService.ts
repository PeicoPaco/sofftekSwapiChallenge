import axios from "axios";

export const fetchDataFromSwapi = async (resource: string, id: string) => {
  const url = `https://swapi.dev/api/${resource}/${id}/`;
  try {
    const response = await axios.get(url);
    if (response.data) {
      return {
        id,
        resource,
        data: response.data,
      };
    } else {
      throw new Error(`Error fetching ${resource} with ID ${id} from SWAPI`);
    }
  } catch (error) {
    console.error(
      `Error fetching ${resource} with ID ${id} from SWAPI: `,
      error
    );
    throw new Error("Error fetching data from SWAPI");
  }
};
