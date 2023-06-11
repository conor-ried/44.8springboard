import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
  const [box, setBox] = useState({ width: "", height: "", color: "" });

  const handleChange = (e) => {
    setBox({ ...box, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({
      id: Date.now(),
      color: box.color,
      width: parseInt(box.width),
      height: parseInt(box.height),
    });
    setBox({ width: "", height: "", color: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Width"
        name="width"
        value={box.width}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Height"
        name="height"
        value={box.height}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Color"
        name="color"
        value={box.color}
        onChange={handleChange}
      />
      <button>Add Box</button>
    </form>
  );
};

export default NewBoxForm;