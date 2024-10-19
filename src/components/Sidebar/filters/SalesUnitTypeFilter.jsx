// src/components/Sidebar/filters/SalesUnitTypeFilter.jsx
import React, { useState } from 'react';
import DropdownArrow from '../utils/DropdownArrow';

const SalesUnitTypeFilter = ({ selectedSalesUnitTypes, setSelectedSalesUnitTypes }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const salesUnits = ['/each', '/oz', '/lb'];

  return (
    <div className="mb-6">
      <h3 className="font-semibold mb-2">Sales Unit Type</h3>
      <div className="relative ml-2">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="w-full p-2 border border-gray-300 rounded flex justify-between items-center"
        >
          Select Sales Unit Types
          <DropdownArrow isOpen={showDropdown} />
        </button>
        {showDropdown && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg">
            {salesUnits.map(unit => (
              <label key={unit} className="flex items-center p-2 hover:bg-gray-100">
                <input
                  type="checkbox"
                  checked={selectedSalesUnitTypes.includes(unit)}
                  onChange={() => {
                    setSelectedSalesUnitTypes(prev => 
                      prev.includes(unit)
                        ? prev.filter(t => t !== unit)
                        : [...prev, unit]
                    )
                  }}
                  className="form-checkbox text-blue-600"
                />
                <span className="ml-2 text-sm">{unit}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SalesUnitTypeFilter;