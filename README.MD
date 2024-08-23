# SWAPI Translation and DynamoDB Integration

## Project Overview

This project integrates with the [Star Wars API (SWAPI)](https://swapi.dev/) to retrieve information about the Star Wars universe, translate the response keys, and store the translated data into a DynamoDB table. The entire project is developed using TypeScript and includes robust validation for POST requests using Joi.
In this case we only focused on two resources: Planet and Films.

## Features

- **SWAPI Integration:** Fetches data from the SWAPI API.
- **Key Translation:** Translates the keys of the SWAPI API response to a different language, from EN to ES in this case.
- **DynamoDB Integration:** Stores the translated data into a DynamoDB table.
- **TypeScript:** Strongly typed codebase for better maintainability and development experience.
- **Joi Validation:** Ensures that the data being posted to DynamoDB meets predefined validation rules.

## Serverless Framework

This project is built using the Serverless Framework, which allows for quick configuration of AWS resources and permissions. The Serverless Framework makes it easy to deploy and manage the application's infrastructure.

- **API Gateway:** The main entry point for the application, enabling HTTP requests to be routed to the appropriate Lambda function.
- **Lambda Functions:** Each service within the project is exposed as an individual Lambda function, making the application modular and scalable.
- **DynamoDB:** Used as the primary database for storing translated data.

## Installation

To get started, clone the repository and install the dependencies:

```bash
git clone https://github.com/your-repo-name.git
cd your-repo-name
cd softtekchallenge
npm i
```

## Deployment

Deploy the application using the Serverless Framework:

```bash
serverless deploy
```

This will deploy the Lambda functions, API Gateway configuration, and DynamoDB table to AWS.

You must configure your user before being able to do this, with the SDK provided by AWS.

## Usage

After deployment, you can interact with the application through the API Gateway endpoint. You can fetch data from SWAPI, translate it, and store it in DynamoDB by making a POST request.

### Example Request

```bash
curl -X POST https://your-api-gateway-endpoint/dev/translate-and-store \
-H "Content-Type: application/json" \
-d '{
  "url": "https://swapi.dev/api/people/1/"
}'
```

This will fetch the data from the SWAPI API, translate the keys, and store the result in DynamoDB.

## Postman Docs

You can check the functionality of the app in the postman example. Basically what you need to do is:

1. Get the information from swapi, in english. You can use this with dynamic values /:resource/:id
2. Use the translate endpoint to get the keys with the same body response you got from step 1.
3. Now you need to only send the data with the post method on the resource you want to use and don't forget to add the filmId or planetId as needed.

## Validation

The project uses Joi for validation to ensure that all data passed to the Lambda functions meets the expected format and constraints.
