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
        <img
            ref={drag}
            src={item.image}
            style={{
                opacity: isDragging ? 0.5 : 1,
                width: "50px",
                height: "50px",
                margin: "2px",
                cursor: "move",
            }}
            alt={item.name}
        />
    );
};

export default DraggableItem;
