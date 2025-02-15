import React, { useEffect, useRef, useState } from "react";
import CustomSelect from "./CutomSelect";
import Modal from "./Modal";
import DescriptionModal from "./DescriptionModal";

const TodoForm = () => {
  const [status, setStatus] = useState("pending");
  const [priority, setPriority] = useState("medium");
  const [title, setTitle] = useState("");
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);

  const resetValues = () => {
    setTitle("");
    setDescription("");
    setStatus("pending");
    setPriority("medium");
  };

  const addTodo = async (e) => {
    e.preventDefault();
    try {
      const settings = {
        method: "POST",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          status,
          priority,
        }),
      };

      const result = await fetch("http://localhost:8080/api/todos", settings);
      if (result.status !== 201) {
        const data = await result.json();
        alert(data.message);
        return;
      }
      const data = await result.json();
      setTodos((prev) => {
        const updatedTodos = [...prev, data.todo];
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        return updatedTodos;
      });
      resetValues();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form action="#" className="space-y-4">
      <div className="flex gap-2">
        <input
          className="flex-1 bb outline-none"
          type="text"
          name="title"
          placeholder="Add a new todo..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          className="border border-[var(--color-primary)] hover:text-white hover:bg-[var(--color-primary)] rounded cursor-pointer text-gray-700  py-2 px-2"
          type="button"
          onClick={() => setOpen(true)}
        >
          Description
        </button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <DescriptionModal
            open={open}
            onClose={() => setOpen(false)}
            description={description}
            setDescription={setDescription}
          />
        </Modal>
        <CustomSelect
          options={[
            { value: "pending" },
            { value: "in-progress" },
            { value: "completed" },
            { value: "archived" },
          ]}
          value={status}
          onChange={setStatus}
        />
        <CustomSelect
          options={[
            { value: "low" },
            { value: "medium" },
            { value: "high" },
            { value: "urgent" },
          ]}
          value={priority}
          onChange={setPriority}
        />
        <button
          type="button"
          onClick={(e) => addTodo(e)}
          className="border border-gray-400 w-[80px] rounded cursor-pointer bg-[var(--color-primary)] text-white"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
