import { DataTypes } from "sequelize";

const Fighter = (db) => {
    return db.define("fighter", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        orgin: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        alignment: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        costumevariation: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ps2: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        gamecube: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        psp: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        ultimate: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    });
};
