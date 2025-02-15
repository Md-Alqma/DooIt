import React from "react";

const Modal = ({ open, onClose, desc, setDesc }) => {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        open ? "visible bg-black/20 z-10" : "invisible"
      }`}
    >
      <div
        className={`bg-white rounded-xl shadow p-6 transition-all ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={(e) => {
            e.preventDefault();
            onClose();
          }}
          className="absolute text-lg font-black top-1 right-2 p-2 rounded-lg text-gray-600 bg-white hover:bg-gray-50 hover:text-gray-800 cursor-pointer"
        >
          X
        </button>
        <div className="mx-auto my-4 w-full">
          <h3 className="text-lg font-black text-gray-700 mb-2">
            Add Description
          </h3>
          <textarea
            cols="50"
            rows="10"
            placeholder="description..."
            className="border border-gray-200 rounded-lg p-2 outline-gray-400"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
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
      </div>
    </div>
  );
};

export default Modal;
