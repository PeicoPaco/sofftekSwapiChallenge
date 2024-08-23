import { docClient } from "../lib/utils/dynamoClient";
import { PutCommand, GetCommand } from "@aws-sdk/lib-dynamodb";
import { Planet } from "../interfaces/planet";
import { CreatePlanetDTO } from "../dto/createPlanetDto";

const PLANETS_TABLE = process.env.PLANETS_TABLE;

export const getPlanetbyId = async (
  planetId: number
): Promise<Planet | null> => {
  const params = {
    TableName: PLANETS_TABLE,
    Key: { planetId },
  };

  const command = new GetCommand(params);
  const { Item } = await docClient.send(command);
  return (Item as Planet) || null;
};

export const createPlanet = async (
  createPlanetDto: CreatePlanetDTO
): Promise<Planet> => {
  const params = {
    TableName: PLANETS_TABLE,
    Item: { ...createPlanetDto },
  };

  try {
    const command = new PutCommand(params);
    await docClient.send(command);
    return createPlanetDto as Planet;
  } catch (error) {
    console.error("Error inserting planet into DynamoDB:", error);
    throw new Error("Could not insert planet into DynamoDB");
  }
};
