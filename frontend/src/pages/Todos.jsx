import React, { useState } from "react";
import { Outlet, useParams, useNavigate } from "react-router-dom";
import Tabs from "../components/Tabs";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import Modal from "../components/Modal";
import TodoEdit from "../components/TodoEdit";

const Todos = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
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
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
          navigate("/todos");
        }}
      >
        <TodoEdit />
      </Modal>
      <Outlet />
    </div>
  );
};

export default Todos;
