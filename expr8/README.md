# Experiment 8: RESTful API with Express.js

This experiment demonstrates creating a RESTful API using Express.js that supports CRUD (Create, Read, Update, Delete) operations on users.

## Setup

```bash
npm install
```

## Running the Server

```bash
node server.js
```

The server will start on http://localhost:3000

## API Endpoints

### Root
- **GET** `/` - Welcome message

### CRUD Operations

#### Create (POST)
- **POST** `/users` - Create a new user
- Request Body:
  ```json
  {
    "name": "Charlie",
    "email": "charlie@example.com"
  }
  ```

#### Read (GET)
- **GET** `/users` - Get all users
- **GET** `/users/:id` - Get a specific user by ID

#### Update (PUT)
- **PUT** `/users/:id` - Update a user by ID
- Request Body:
  ```json
  {
    "name": "Charlie Updated",
    "email": "charlie.updated@example.com"
  }
  ```

#### Delete (DELETE)
- **DELETE** `/users/:id` - Delete a user by ID

## Testing with curl

### Create a user
```bash
curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d "{\"name\": \"Charlie\", \"email\": \"charlie@example.com\"}"
```

### Get all users
```bash
curl -X GET http://localhost:3000/users
```

### Get a user by ID
```bash
curl -X GET http://localhost:3000/users/1
```

### Update a user
```bash
curl -X PUT http://localhost:3000/users/1 -H "Content-Type: application/json" -d "{\"name\": \"Alice Updated\", \"email\": \"alice.updated@example.com\"}"
```

### Delete a user
```bash
curl -X DELETE http://localhost:3000/users/1
```

## Testing with Postman

1. Open Postman
2. Create requests with the appropriate HTTP method and URL
3. For POST and PUT requests, add JSON data in the Body tab (raw, JSON format)
4. Click Send to execute the request
