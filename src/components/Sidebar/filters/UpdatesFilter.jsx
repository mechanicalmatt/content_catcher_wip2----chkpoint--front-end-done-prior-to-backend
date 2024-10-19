// src/components/Sidebar/filters/UpdatesFilter.jsx

import React from 'react';

const UpdatesFilter = ({ viewOption, setViewOption }) => {
  return (
    <div className="mb-6">
      <h3 className="font-semibold mb-2">Updates</h3>
      <div className="flex space-x-4 ml-2">
        <label className="flex items-center">
          <input
            type="radio"
            className="form-radio text-blue-600"
            value="All"
            checked={viewOption === "All"}
            onChange={(e) => setViewOption(e.target.value)}
          />
          <span className="ml-2 text-sm">All items</span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            className="form-radio text-blue-600"
            value="Updated L7"
            checked={viewOption === "Updated L7"}
            onChange={(e) => setViewOption(e.target.value)}
          />
          <span className="ml-2 text-sm">Updated L7</span>
        </label>
      </div>
    </div>
  );
};

export default UpdatesFilter;