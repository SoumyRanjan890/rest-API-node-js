# rest-API-node-js
# Movie Collection REST API

A simple Node.js REST API for managing a movie collection. This API allows users to perform CRUD operations (Create, Read, Update, Delete) on movie entries stored in a JSON file. It validates UUIDs and responds with appropriate HTTP status codes and messages. The API utilizes Express.js for routing and basic middleware for request handling.

## Features

- **Create**: Add a new movie to the collection.
- **Read**: Retrieve details of all movies or a specific movie by ID.
- **Update**: Modify details of an existing movie.
- **Delete**: Remove a movie from the collection.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/movie-collection-api.git
    cd movie-collection-api
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the server:
    ```bash
    npm start
    ```

## Usage

### Endpoints

- **GET /api/movies**: Retrieve all movies.
- **GET /api/movies/:id**: Retrieve a movie by ID.
- **POST /api/movies**: Add a new movie.
- **PUT /api/movies/:id**: Update an existing movie.
- **DELETE /api/movies/:id**: Delete a movie.

### Example Requests

- **GET /api/movies**
    ```bash
    curl -X GET http://localhost:3000/api/movies
    ```

- **POST /api/movies**
    ```bash
    curl -X POST http://localhost:3000/api/movies -H "Content-Type: application/json" -d '{"title": "Inception", "director": "Christopher Nolan"}'
    ```

- **PUT /api/movies/:id**
    ```bash
    curl -X PUT http://localhost:3000/api/movies/<movie_id> -H "Content-Type: application/json" -d '{"title": "Inception", "director": "Christopher Nolan"}'
    ```

- **DELETE /api/movies/:id**
    ```bash
    curl -X DELETE http://localhost:3000/api/movies/<movie_id>
    ```

## JSON Structure

Movies are stored as JSON objects with the following structure:
```json
{
  "id": "uuid",
  "title": "Movie Title",
  "director": "Director Name",
  "year": 2020
}
created by Soumya Ranjan Jena
 SoumyRanjan890 is my github id. This README provides a clear and concise overview of the project, installation instructions, usage examples, and other relevant information.
