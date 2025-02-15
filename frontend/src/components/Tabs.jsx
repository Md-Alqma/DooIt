import React, { useState } from "react";

const Tabs = () => {
  const tabs = ["All", "Active", "Pendig", "Completed", "Archived"];
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="w-full flex space-x-4 bg-gray-100 p-2 rounded-lg shadow-md justify-between mt-16">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 w-full py-2 text-sm font-medium rounded-lg transition-all duration-300 
              ${
                activeTab === tab
                  ? "bg-[var(--color-primary)] text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
