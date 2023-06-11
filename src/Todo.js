import React from "react";

const Todo = ({ todo, removeTodo }) => {
  return (
    <div>
      <div>{todo}</div>
      <button onClick={removeTodo}>X</button>
    </div>
  );
};

export default Todo;