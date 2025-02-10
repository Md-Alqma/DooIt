import React from "react";
import Tabs from "../components/Tabs";
import TodoForm from "../components/TodoForm";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <header className="flex justify-center items-center">
          <h1 className="text-4xl font-bold mb-10 text-[var(--color-primary)]">
            DooIt
          </h1>
        </header>
        <main>
          <TodoForm />
          <Tabs />
        </main>
      </div>
    </div>
  );
};

export default Home;
