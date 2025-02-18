import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CustomSelect from "./CutomSelect";

const TodoEdit = () => {
  const { todoId } = useParams();

  //   const [title, setTitle] = useState(preTitle);
  //   const [description, setDescription] = useState(preDescription);
  //   const [status, setStatus] = useState(preStatus);
  //   const [priority, setPriority] = useState(prePriority);

  let todo = null;

  useEffect(() => {
    const fetchTodoById = async () => {
      const response = await fetch(
        `http://localhost:8080/api/todos/${todoId}`,
        {
          method: "GET",
          headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      const result = await response.json();

      todo = result.todo;
    };

    fetchTodoById();
  }, []);

  //   const editTodo = async (e) => {
  //     e.preventDefault();

  //     const settings = {
  //       method: "PUT",
  //       headers: {
  //         authorization: "Bearer " + localStorage.getItem("token"),
  //         "Content-Type": "application/json",
  //       },
  //       body: {
  //         title,
  //         description,
  //         status,
  //         priority,
  //       },
  //     };

  //     try {
  //       const response = await fetch(
  //         "http://localhost:8080/api/todos/:todoId",
  //         settings
  //       );
  //     } catch (error) {}
  //   };
  return (
    <div className="mx-auto my-4 w-full">
      <h3 className="text-lg font-black text-gray-700 mb-3">Edit Todo</h3>
      <form action="#" className="space-y-4">
        <div className="flex flex-col gap-2">
          <input
            className="w-full border border-gray-200 rounded-lg p-2 outline-gray-400"
            type="text"
            // value={title}
            // onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            cols="50"
            rows="8"
            placeholder="description..."
            className="border border-gray-300 rounded-lg p-2 outline-gray-400"
            // value={description}
            // onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex gap-2 justify-between">
          <CustomSelect
            options={[
              { value: "pending" },
              { value: "in-progress" },
              { value: "completed" },
              { value: "archived" },
            ]}
            // value={status}
            // onChange={setStatus}
          />
          <CustomSelect
            options={[
              { value: "low" },
              { value: "medium" },
              { value: "high" },
              { value: "urgent" },
            ]}
            // value={priority}
            // onChange={setPriority}
          />
          <button
            type="button"
            // onClick={(e) => editTodo(e)}
            className="border border-gray-400 w-[100px] rounded cursor-pointer bg-[var(--color-primary)] text-white"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoEdit;
