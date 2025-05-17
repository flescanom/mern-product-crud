import { createPool } from "mysql2/promise";
import sequelize from "sequelize";

export const db = new sequelize("productsdb", "root", "root2025!", {
  host: "localhost",
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

// module.export = db;

// export const pool = createPool({
//   host: "localhost",
//   port: 3306,
//   user: "root",  
//   password: "mernPasswordDB",
//   database: "productsdb",
// });
