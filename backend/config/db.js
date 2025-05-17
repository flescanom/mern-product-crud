import sequelize from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const db = new sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: "mysql",
});

const connection = () => {
  db.authenticate()
    .then(() => {
      console.log("Connection has been established successfully");
    })
    .catch((err) => {
      console.error("Unable to connect to the database: ", err.message);
    });
};

connection();
