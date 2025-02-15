import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const settings = {
          method: "GET",
          headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        };
        const result = await fetch("http://localhost:8080/api/todos", settings);
        const data = await result.json();
        setTodos(data.todos);
      } catch (error) {
        console.log(error);
      }
    };

    setInterval(() => {
      fetchTodos();
    }, 100);
  }, []);

  return (
    <div>
      {todos?.map((todo) => (
        <TodoItem
          key={todo._id}
          title={todo.title}
          description={todo.description}
          status={todo.status}
          priority={todo.priority}
        />
      ))}
    </div>
  );
};

export default TodoList;
