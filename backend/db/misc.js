import { DataTypes } from "sequelize";

const misc = (db) => {
    return db.define("misc", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        bio: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ending: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fighterID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });
};
