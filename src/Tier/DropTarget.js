// DropTarget.js
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
                minHeight: "200px",
                width: "200px",
                padding: "16px",
                border: "1px solid red",
                backgroundColor: isOver ? "lightgreen" : "white",
            }}
        >
            {items.map((item) => (
                <DraggableItem key={item.id} item={item} />
            ))}
            {!items.length && <p>Drop items here</p>}
        </div>
    );
};

export default DropTarget;
