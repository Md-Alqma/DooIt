import React, { useEffect, useState } from "react";

const statusColors = {
  pending: "bg-yellow-500",
  "in-progress": "bg-blue-500",
  completed: "bg-green-500",
  archived: "bg-gray-500",
};

const priorityColors = {
  low: "bg-green-500",
  medium: "bg-yellow-500",
  high: "bg-orange-500",
  urgent: "bg-red-500",
};

const TodoItem = ({ title, description, status, priority }) => {
  const [checked, setChecked] = useState(false);

  const truncatedDescription =
    description?.length > 50 ? description.slice(0, 50) + "..." : description;

  return (
    <div
      className={`flex justify-between items-center p-4 rounded-lg shadow-sm ${
        checked ? "line-through opacity-50" : ""
      }`}
    >
      <div className="flex items-start gap-3 w-full">
        {/* Checkbox to mark as completed */}
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          className="cursor-pointer mt-2"
        />

        <div className="w-full">
          <div className="flex items-center gap-4">
            <h3 className="text-lg font-semibold">{title}</h3>

            <div className="flex items-center gap-2">
              <span
                className={`text-white text-xs px-2 py-1 rounded-full ${statusColors[status]}`}
              >
                {status}
              </span>
              <span
                className={`w-3 h-3 rounded-full ${priorityColors[priority]}`}
                title={priority}
              ></span>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-1 leading-relaxed">
            {truncatedDescription}
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button className="p-2 rounded-lg hover:bg-blue-100 transition cursor-pointer">
          <img width={32} src="/view.png" alt="Edit" />
        </button>
        <button className="p-2 rounded-lg hover:bg-yellow-100 transition cursor-pointer">
          <img width={32} src="/editing.png" alt="Edit" />
        </button>
        <button className="p-2 rounded-lg hover:bg-red-100 transition cursor-pointer">
          <img width={32} src="/delete.png" alt="Delete" />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
