import { Sequelize } from "sequelize";
import commentModel from "./comment.js";
import fighterModel from "./fighter.js";
import movesModel from "./moves.js";
import loginModel from "./login.js";
import tierModel from "./tier.js";
import platformModel from "./platform.js";
import miscModel from "./misc.js";

const db = new Sequelize("postgres://localhost:5432/umkd", {});

// Initialize models
const comment = commentModel(db);
const fighter = fighterModel(db);
const moves = movesModel(db);
const login = loginModel(db);
const tier = tierModel(db);
const platform = platformModel(db);
const misc = miscModel(db);

// Establish relationships (associations)
fighter.hasMany(comment, { foreignKey: "fighterID" });
comment.belongsTo(fighter, { foreignKey: "fighterID" });

fighter.hasMany(moves, { foreignKey: "fighterID" });
moves.belongsTo(fighter, { foreignKey: "fighterID" });

fighter.hasMany(misc, { foreignKey: "fighterID" });
misc.belongsTo(fighter, { foreignKey: "fighterID" });

// Add more associations for other tables if needed

const connectToDB = async () => {
    try {
        await db.authenticate();
        console.log("Connection has been established successfully.");

        // Ensure models and associations are reflected in the database
        await db.sync(); // Use alter or force options carefully
        console.log("Database synchronized.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

// Connect to the database
connectToDB();

export { db, comment, fighter, moves, login, platform, tier, misc };
