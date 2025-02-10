import React, { useRef, useState } from "react";
import CustomSelect from "./CutomSelect";

const TodoForm = () => {
  const [status, setStatus] = useState("pending");
  const [priority, setPriority] = useState("medium");

  return (
    <form action="#" className="space-y-4">
      <div className="flex gap-2">
        <input
          className="flex-1 bb outline-none"
          type="text"
          name="title"
          placeholder="Add a new todo..."
        />
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
          type="submit"
          className="border border-gray-400 w-[80px] rounded cursor-pointer bg-[var(--color-primary)] text-white"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
