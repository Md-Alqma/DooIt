import React from "react";
import Tabs from "../components/Tabs";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const Todos = () => {
  return (
    <div className="min-h-screen flex justify-center px-12 mt-20">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <header className="flex justify-center items-center">
          <h1 className="text-4xl font-bold mb-10 text-[var(--color-primary)]">
            DooIt
          </h1>
        </header>
        <main>
          <TodoForm />
          <Tabs />
          <br />
          <br />
          <TodoList />
        </main>
      </div>
    </div>
  );
};

export default Todos;
