import { DataTypes } from "sequelize";

const Comment = (db) => {
    return db.define("comment", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        // loginID: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        userComment: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        commentDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        fighterID: DataTypes.INTEGER,
    });
};

export default Comment;
