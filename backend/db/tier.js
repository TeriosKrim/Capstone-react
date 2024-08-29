import { platform } from "os";
import { DataTypes } from "sequelize";

const tier = (db) => {
    return db.define("tier", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        fighterID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        platformID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        tierLetter: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
};
