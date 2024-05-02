 <p align="center">
  <a href="https://nodejs.org/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" width="200" alt="Node Logo" /></a>
</p>

## Toolbox backend API

This API retrieves data from an external API and reformats it for exposition.

### Endpoints

- **GET /files/list**: Retrieves the list of available files.
- **GET /files/data**: Retrieves the CSV-formatted data from the external API. Optionally, it can retrieve data for a specific file by providing the `fileName` query parameter.

### API Usage

1. Clone the project.
2. Select v14.21.3 node version `nvm use 14.21.3`.
3. Install dependencies: `npm install`.
4. Start the application: `npm start`.
5. Access the application at [http://localhost:3030](http://localhost:3030).

### Testing

- Run the tests `npm test`.
