import { DataTypes } from "sequelize";

const comment = (db) => {
    return db.define("comment", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        loginID: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userComment: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        commentDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    });
};
