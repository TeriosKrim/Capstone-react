import express from "express";
import cors from "cors";
import { db, comment, fighter } from "./db/db.js";
import { Sequelize } from "sequelize";
import { createClerkClient } from "@clerk/backend";
// import { Clerk } from "@clerk/backend";
// import clerkAPIKey from "./clerkAPIKey.js";

const server = express();
server.use(cors());

server.use(express.json());

const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });

const validateUserTokenMiddleware = (req, res, next) => {
    const header = req.headers.authorization;
    if (!header) {
        res.status(401).send({ error: "Authorization header not specified!" });
        return;
    }

    const headerParts = header.split(" ");
    if (headerParts.length !== 2) {
        res.status(401).send({
            error: `Malformed Authorization header - expected two words, found ${headerParts.length}`,
        });
        return;
    }

    if (headerParts[0] !== "Bearer") {
        res.status(401).send({
            error: `Malformed Authorization header - expected Bearer scheme, found ${headerParts[0]}`,
        });
        return;
    }

    const token = headerParts[1];
    if (token.length === 0) {
        res.status(401).send({
            error: "Malformed Authorization header - missing token!",
        });
        return;
    }

    const publicKey = fs.readFileSync("./clerk-public-key.pem", {
        encoding: "utf-8",
    });
    let decoded;
    try {
        decoded = jwt.verify(token, publicKey);
    } catch (error) {
        console.error("Error validating token:", error.message);
        res.status(401).json({
            error: "Malformed Authorization header - invalid token!",
        });
        return;
    }

    // Extract the clerk user id from the decoded token data
    req.auth = { clerkUserId: decoded.sub };
    next();
};

server.get("/comment/:fighterID", async (req, res) => {
    res.send({
        comments: await comment.findAll({
            where: { fighterID: req.params.fighterID },
        }),
    });
});

server.post("/comment", validateUserTokenMiddleware, async (req, res) => {
    console.log(req.user);
    await comment.create(req.body);
    console.log(req.body);
    res.send({
        comments: await comment.findAll({
            where: { fighterID: req.body.fighterID },
        }),
    });
});

server.listen(3001, () => console.log("Listening on port 3001"));

const existingFighter = await fighter.findOne();
if (!existingFighter) {
    await fighter.create({
        name: "Scorpion",
        origin: "Netherrealm",
        alignment: "Neutral",
        costumevariation: "3",
        ps2: true,
        gamecube: true,
        psp: true,
        ultimate: true,
    });
}
