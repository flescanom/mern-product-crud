import dotenv from "dotenv";
dotenv.config();
import swaggerAutogen from "swagger-autogen";

const outputFile = "./swagger.json";
const endPointsFiles = ["../server.js"];

const doc = {
    info: {
        title: "API de productos",
        description: "Esta API permite gestionar productos"
    },
    host: "localhost:3000",
    schemes: ["http"]
}

swaggerAutogen()(outputFile, endPointsFiles, doc);