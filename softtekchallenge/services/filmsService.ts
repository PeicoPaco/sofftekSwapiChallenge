import { docClient } from "../lib/utils/dynamoClient";
import { PutCommand, GetCommand } from "@aws-sdk/lib-dynamodb";
import { Film } from "../interfaces/film";
import { CreateFilmDTO } from "../dto/createFilmDto";

const FILMS_TABLE = process.env.FILMS_TABLE;

export const getFilmById = async (filmId: number): Promise<Film | null> => {
  const params = {
    TableName: FILMS_TABLE,
    Key: { filmId },
  };

  const command = new GetCommand(params);
  const { Item } = await docClient.send(command);
  return (Item as Film) || null;
};

export const createFilm = async (
  createFilmDto: CreateFilmDTO
): Promise<Film> => {
  const params = {
    TableName: FILMS_TABLE,
    Item: { ...createFilmDto },
  };

  try {
    const command = new PutCommand(params);
    await docClient.send(command);
    return createFilmDto as Film;
  } catch (error) {
    console.error("Error inserting film into DynamoDB:", error);
    throw new Error("Could not insert film into DynamoDB");
  }
};
