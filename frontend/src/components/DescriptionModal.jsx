import React from "react";

const DescriptionModal = ({ onClose, description, setDescription }) => {
  return (
    <div className="mx-auto my-4 w-full">
      <h3 className="text-lg font-black text-gray-700 mb-2">Add Description</h3>
      <textarea
        cols="50"
        rows="10"
        placeholder="description..."
        className="border border-gray-200 rounded-lg p-2 outline-gray-400"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <button
        type="button"
        className="border border-gray-400 w-[80px] rounded cursor-pointer bg-[var(--color-primary)] text-white p-2"
        onClick={onClose}
      >
        Add
      </button>
    </div>
  );
};

export default DescriptionModal;
