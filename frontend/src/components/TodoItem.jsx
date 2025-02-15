import React, { useState } from "react";

const TodoItem = ({ title, description, status, priority }) => {
  const [checked, setChecked] = useState(false);
  return (
    <div
      className={`flex justify-between items-center ${
        checked ? "line-through" : "none"
      } border border-black`}
    >
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="flex justify-between gap-2">
        <button className="cursor-pointer">
          <img width={20} src="/editing.png" alt="Edit" />
        </button>
        <button className="cursor-pointer">
          <img width={20} src="/delete.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
