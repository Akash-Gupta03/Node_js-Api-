// const express = require("express");
// const cors = require("cors");

// const taskRoutes = require("./routes/taskRoutes");

// const app = express();

// // Middlewares
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use("/api/tasks", taskRoutes);

// module.exports = app;
const express = require("express");
const cors = require("cors");

const customRoutes = require("./routes/customRoutes");
const swaggerDocs = require("./config/swagger");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/customers", customRoutes);

// Swagger
swaggerDocs(app);

module.exports = app;
