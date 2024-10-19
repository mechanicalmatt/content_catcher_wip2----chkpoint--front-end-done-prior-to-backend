// src/components/Sidebar/filters/SellerIdFilter.jsx

import React, { useState } from 'react';
import DropdownArrow from '../utils/DropdownArrow';

const SellerIdFilter = ({ sellers, selectedSellerIds, setSelectedSellerIds }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="mb-6">
      <h3 className="font-semibold mb-2">Seller ID</h3>
      <div className="relative ml-2">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="w-full p-2 border border-gray-300 rounded flex justify-between items-center"
        >
          Select Seller IDs
          <DropdownArrow isOpen={showDropdown} />
        </button>
        {showDropdown && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-y-auto">
            {sellers.map(seller => (
              <label key={seller.id} className="flex items-center p-2 hover:bg-gray-100">
                <input
                  type="checkbox"
                  checked={selectedSellerIds.includes(seller.id)}
                  onChange={() => {
                    setSelectedSellerIds(prev => 
                      prev.includes(seller.id)
                        ? prev.filter(id => id !== seller.id)
                        : [...prev, seller.id]
                    )
                  }}
                  className="form-checkbox text-blue-600"
                />
                <span className="ml-2 text-sm">{`ID: ${seller.id}`}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SellerIdFilter;