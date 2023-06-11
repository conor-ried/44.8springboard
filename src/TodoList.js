import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h3>Todo List</h3>
      <NewTodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} removeTodo={() => removeTodo(index)} />
      ))}
    </div>
  );
};

export default TodoList;


