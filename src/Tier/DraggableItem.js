// DraggableItem.js
import React from "react";
import { useDrag } from "react-dnd";

const ItemTypes = {
    ITEM: "item",
};

const DraggableItem = ({ item }) => {
    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.ITEM,
        item: { id: item.id },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    return (
        <div
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
                padding: "16px",
                margin: "4px",
                backgroundColor: "lightgrey",
                border: "1px solid black",
            }}
        >
            <img src={item.image} />
        </div>
    );
};

export default DraggableItem;
