import { Sequelize } from "sequelize";
import commentModel from "./comment.js";
import fighterModel from "./fighter.js";

const db = new Sequelize("postgres://localhost:5432/umkd", {});

const comment = commentModel(db);
const fighter = fighterModel(db);

const connectToDB = async () => {
    try {
        await db.authenticate();
        console.log("Connection has been established successfully.");

        db.sync(); //{ alter: true }
    } catch (error) {
        console.error(error);
        console.error("Unable to connect to the database");
    }
};
connectToDB();

export { db, comment, fighter };
