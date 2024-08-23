# educase-assignment

This is an assignment repo from Educase

## Requirements

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm)
- [MySQL](https://www.mysql.com/downloads/)

## Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/gaush42/educase-assignment.git
   cd educase-assignment

2. **Instal Dependencies**
   ```
   npm install
3. **Configure Environment Variables**
   ```
   DB_HOST=
   DB_PORT=
   DB_USER=
   DB_PASSWORD=
   DB_NAME=
   DB_DIALECT=mysq
## Running the Application
    npm start

## API Endpoints
1. **Add School** <br>
    Endpoint: /api/addSchool<br>
    Method: POST<br>
    Description: Adds a new school to the database.<br>
    **Payload:**
    json
    ```
    {
        "name": "abc school",
        "address": "123 Main St",
        "latitude": 40.7128,
        "longitude": -74.0060
    }
2. **List Schools** <br>
    Endpoint: /api/listSchools<br>
    Method: GET<br>
    Description: Retrieves a list of schools sorted by proximity to the specified location.<br>
    Parameters:<br>
    latitude (required): Latitude of the user's location.<br>
    longitude (required): Longitude of the user's location.<br>
    **example**
    ```
    http://localhost:4000/api/listSchools/?latitude=19.4&longitude=77.2
