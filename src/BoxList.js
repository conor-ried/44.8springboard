import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";

const BoxList = () => {
  const INITIAL_BOX = [
    { id: 1, box_name: "Box one", width: 200, height: 200, color: "red"},
    { id: 2, box_name: "Box two", width: 150, height: 150, color: "blue"},
  ];
  const [boxes, setBoxes] = useState(INITIAL_BOX);

  const addBox = (box) => {
    setBoxes([...boxes, box]);
  };

  const removeBox = (id) => {
    setBoxes(boxes.filter((box) => box.id !== id));
  };

  return (
    <div className="Box-List">
      <h3>Box List</h3>
      <div>
        {boxes.map(({ id, box_name, width, height, color }) => (
          <Box
            id={id}
            box_name={box_name}
            width={width}
            height={height}
            color={color}
            key={id}
            removeBox={removeBox}
          />
        ))}
      </div>
      <NewBoxForm addBox={addBox} />
    </div>
  );
};

export default BoxList;