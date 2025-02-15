import React, { useRef, useState } from "react";
import CustomSelect from "./CutomSelect";
import Modal from "./Modal";

const TodoForm = () => {
  const [status, setStatus] = useState("pending");
  const [priority, setPriority] = useState("medium");
  const [title, setTitle] = useState("");
  const [open, setOpen] = useState(false);

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
          <div className="mx-auto my-4 w-full">
            <h3 className="text-lg font-black text-gray-700 mb-2">
              Add Description
            </h3>
            <textarea
              cols="50"
              rows="10"
              placeholder="description..."
              className="border border-gray-200 rounded-lg p-2 outline-gray-400"
            />
            <br />
            <button
              type="button"
              className="border border-gray-400 w-[80px] rounded cursor-pointer bg-[var(--color-primary)] text-white p-2"
            >
              Add
            </button>
          </div>
        </Modal>
        {/* {toggleModal && <Modal />} */}
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
