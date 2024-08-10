import React from "react";
import { useDrop } from "react-dnd";
import DraggableItem from "./DraggableItem";

const ItemTypes = {
    ITEM: "item",
};

const DropTarget = ({ items, onDrop }) => {
    const [{ canDrop, isOver }, drop] = useDrop({
        accept: ItemTypes.ITEM,
        drop: (item) => onDrop(item.id),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    });

    return (
        <div
            ref={drop}
            style={{
                minHeight: "50px",
                width: "100%",
                padding: "10px",
                border: "2px border #ccc",
                backgroundColor: isOver ? "white" : "transparent",
                transition: "background-color 0.3s ease",
            }}
        >
            {items.map((item) => (
                <DraggableItem key={item.id} item={item} />
            ))}
            {!items.length && <p></p>}
        </div>
    );
};

export default DropTarget;
