import { useState, memo, useRef } from "react";

const CustomSelect = memo(({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-[120px]">
      <button
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        className="w-full px-2 py-2 border border-gray-300 rounded bg-white text-gray-700 cursor-pointer outline-none focus:ring-2 focus:ring-blue-400 flex justify-between items-center"
      >
        {String(value).charAt(0).toUpperCase() + String(value).slice(1)}
        <span className="ml-2">↓</span>
      </button>

      {isOpen && (
        <ul className="absolute w-full bg-white border border-gray-300 rounded mt-1 shadow-lg z-10">
          {options.map((option) => (
            <li
              key={option.value}
              className={`px-3 py-2 cursor-pointer hover:bg-blue-500 hover:text-white ${
                value === option.value ? "bg-blue-500 text-white" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              {String(option.value).charAt(0).toUpperCase() +
                String(option.value).slice(1)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

export default CustomSelect;
