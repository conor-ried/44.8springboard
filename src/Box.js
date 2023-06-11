import React from "react";

const Box = ({ id, box_name, width, height, removeBox, color }) => {
  const handleRemove = () => {
    removeBox(id);
  };

  
  return (
    <div
      style={{
    
        width: `${width}px`,
        height: `${height}px`,
        margin: "10px",
        backgroundColor: `${color}`
      }}
    >
      <button onClick={handleRemove}>X</button>
      <p>{box_name}</p>
      <p>
        {width}px x {height}px
      </p>
    </div>
  );
};

export default Box;