import { Sequelize } from "sequelize";

const db = new Sequelize("postgres://localhost:5432/umkd", {});

const connectToDB = async () => {
    try {
        await db.authenticate();
        console.log("Connection has been established successfully.");

        db.sync();
    } catch (error) {
        console.error(error);
        console.error("Unable to connect to the database");
    }
};
connectToDB();
