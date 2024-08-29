import { DataTypes } from "sequelize";

const moves = (db) => {
    return db.define("moves", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        stance1: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        stance2: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        weapon: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        special: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fighterID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        link: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    });
};
