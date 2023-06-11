import React, { useState } from "react";

const NewtodoForm = ({ addTodo }) => {
  const [todo, setTodos] = useState("");

  const handleChange = (e) => {
    setTodos(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodos("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task"
        value={todo}
        onChange={handleChange}
      />
      <button>Add Todo</button>
    </form>
  );
};

export default NewtodoForm;