import express from "express";

import { PORT } from "./config.js";
import { db } from "./db.js";

import { productsRouter } from "./routes/products.route.js";

// Creating server
const app = express();

// Read and parser body request
app.use(express.json());

db.sync().then(() => {
  console.log("Database is synchronized");
});

app.use("/api/products", productsRouter);

app.listen(PORT, () => {
  console.log(`Server is running in port ${PORT}`);
});
