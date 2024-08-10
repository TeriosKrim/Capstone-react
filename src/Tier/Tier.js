import React, { useEffect, useState } from "react";
import "../App.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DropTarget from "./DropTarget";

const Tier = () => {
    const [tier, setTier] = useState(["S", "A", "B", "C", "D", "F"]);
    const [selectedVersion, setSelectedVersion] = useState("null");

    const [characterPool, setCharacterPool] = useState([
        {
            id: "Kenshi",
            name: "Kenshi",
            image: "/img/Characters/icon/Kenshi.png",
            versions: ["PS2/Xbox", "Gamecube", "PSP", "Ultimate"],
        },
        {
            id: "Jade",
            name: "Jade",
            image: "/img/Characters/icon/Jade.png",
            versions: ["PS2/Xbox", "Gamecube", "PSP", "Ultimate"],
        },
    ]);

    const [sTier, setSTier] = useState([]);
    const [aTier, setATier] = useState([]);

    const handleDrop = (itemId) => {
        console.log("drop");
        setSTier((prev) => [
            ...prev,
            characterPool.find((item) => item.id === itemId),
        ]);
        setCharacterPool((prev) => prev.filter((item) => item.id !== itemId));
    };

    console.log("hit");

    return (
        <>
            <div className="container">
                <h1>Tier List</h1>
                <DndProvider backend={HTML5Backend}>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <DropTarget items={sTier} onDrop={handleDrop} />
                        <DropTarget items={characterPool} onDrop={() => {}} />
                    </div>
                </DndProvider>

                {/* <div id="tierList"></div>
                <button id="resetButton">Reset Tier List</button>
                <div id="characterPool"></div> */}
            </div>
            <div id="disclaimer">
                <p id="mod">I am not affiliated with the mod of any kind</p>
                <p id="mod">Background by Monster Enjoyer</p>
                <p id="warner">
                    Mortal Kombat:Deception was published by Midway games Mortal
                    Kombat©,the Dragon Logo and all characters names are
                    trademarks of Warner Bros.Entertainment Inc.
                </p>
            </div>
        </>
    );
};

export default Tier;
