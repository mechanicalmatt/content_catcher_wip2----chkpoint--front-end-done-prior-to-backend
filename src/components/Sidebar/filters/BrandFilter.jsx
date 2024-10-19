// src/components/Sidebar/filters/BrandFilter.jsx
import React, { useState } from 'react';
import DropdownArrow from '../utils/DropdownArrow';

const BrandFilter = ({ selectedBrands, setSelectedBrands }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const brands = ['Nestle', 'Mars', 'Hartz', 'Blue Buffalo'];

  return (
    <div className="mb-6">
      <h3 className="font-semibold mb-2">Brands</h3>
      <div className="relative ml-2">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="w-full p-2 border border-gray-300 rounded flex justify-between items-center"
        >
          Select Brands
          <DropdownArrow isOpen={showDropdown} />
        </button>
        {showDropdown && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg">
            {brands.map(brand => (
              <label key={brand} className="flex items-center p-2 hover:bg-gray-100">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => {
                    setSelectedBrands(prev => 
                      prev.includes(brand)
                        ? prev.filter(b => b !== brand)
                        : [...prev, brand]
                    )
                  }}
                  className="form-checkbox text-blue-600"
                />
                <span className="ml-2 text-sm">{brand}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandFilter;