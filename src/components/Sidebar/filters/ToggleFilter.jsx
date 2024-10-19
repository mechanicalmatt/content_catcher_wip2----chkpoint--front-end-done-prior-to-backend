// src/components/Sidebar/filters/ToggleFilter.jsx

import React from 'react';

const ToggleFilter = ({ label, values, setValues }) => {
  const options = ['Either', 'Yes', 'No'];

  const handleClick = (option) => {
    if (option === 'Either') {
      if (values.includes('Either')) {
        // If Either is already selected, do nothing
        return;
      } else {
        // If Either is not selected, select it and deselect others
        setValues(['Either']);
      }
    } else {
      if (values.includes(option)) {
        // If the option is already selected, deselect it and select Either
        setValues(['Either']);
      } else {
        // If the option is not selected, select it and deselect Either
        setValues([option]);
      }
    }
  };

  return (
    <div className="mb-6">
      <h3 className="font-semibold mb-2">{label}</h3>
      <div className="flex space-x-2 ml-2">
        {options.map((option) => (
          <button
            key={option}
            className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 active:bg-blue-800 active:text-white active:scale-95 transform ${
              values.includes(option) || (option === 'Either' && values.length === 0)
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => handleClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ToggleFilter;