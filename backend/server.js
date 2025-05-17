import dotenv from "dotenv";
dotenv.config();

import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import swaggerUI from "swagger-ui-express";
import swaggerDocumentation from "./config/swagger.json" with {type: "json"};


import { db } from "./config/db.js";

import { productsRouter } from "./routes/products.route.js";

// Creating server
const app = express();

// Read and parser body request
app.use(express.json());

app.use(cors());

app.use(helmet()); // helmet is a security middleware that helps you protect your app by setting several HTTP headers

app.use(morgan("dev"));

db.sync().then(() => {
  console.log("Database is synchronized");
});

app.use("/doc", swaggerUI.serve, swaggerUI.setup(swaggerDocumentation));
app.use("/api/products", productsRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running in port ${process.env.PORT}`);
});
