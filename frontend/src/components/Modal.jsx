import React from "react";

const Modal = ({ open, onClose, children }) => {
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
        {children}
      </div>
    </div>
  );
};

export default Modal;
