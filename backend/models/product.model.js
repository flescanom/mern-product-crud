import { DataTypes } from "sequelize";
import { db }  from "../db.js"

export const Product = db.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.FLOAT,
        defaultValue: 1.00,
    },
    is_available: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    }
})  