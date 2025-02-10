import React from "react";

const TodoForm = () => {
  return (
    <form action="" className="space-y-4">
      <div className="flex gap-2">
        <input
          className="flex-1 bb outline-none"
          type="text"
          name="title"
          placeholder="Add a new todo..."
        />
        <select
          className="w-[120px] px-3 py-2 border border-gray-300 rounded bg-white text-gray-700 cursor-pointer outline-none focus:ring-2 focus:ring-blue-400"
          name="status"
          id="status"
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In-Progress</option>
          <option value="completed">Completed</option>
          <option value="archived">Archived</option>
        </select>
        <select
          className="w-[120px] px-3 py-2 border border-gray-300 rounded bg-white text-gray-700 cursor-pointer outline-none focus:ring-2 focus:ring-blue-400"
          name="priority"
          id="priority"
        >
          <option value="low">Low</option>
          <option value="medium" selected>
            Medium
          </option>
          <option value="high">High</option>
          <option value="urgent">Urgent</option>
        </select>
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
