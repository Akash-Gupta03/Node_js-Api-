const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Customer API",
      version: "1.0.0",
      description: "CRUD API for managing customers",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./src/routes/*.js"], // we will put docs in route files
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log("📖 Swagger Docs available at http://localhost:3000/api-docs");
}

module.exports = swaggerDocs;
