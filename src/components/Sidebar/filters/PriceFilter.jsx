// src/components/Sidebar/filters/PriceFilter.jsx

import React, { useState, useRef, useEffect, useCallback } from 'react';

const formatPrice = (value) => {
  if (typeof value !== 'string') {
    value = value.toString();
  }
  let numericValue = value.replace(/[^0-9.]/g, '');
  let number = Math.abs(parseFloat(numericValue));
  if (isNaN(number)) return '$0.00';
  if (numericValue === '.') return '$0.';
  number = Math.round(number * 100) / 100;
  return '$' + number.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

const PriceFilter = ({ priceRange, setPriceRange }) => {
  const [priceInputs, setPriceInputs] = useState({ 
    from: formatPrice(priceRange[0]), 
    to: formatPrice(priceRange[1]) 
  });
  const [priceInputError, setPriceInputError] = useState({ from: false, to: false });
  const priceFromRef = useRef(null);
  const priceToRef = useRef(null);

  useEffect(() => {
    setPriceInputs({
      from: formatPrice(priceRange[0]),
      to: formatPrice(priceRange[1])
    });
  }, [priceRange]);

  const handlePriceChange = (type, value) => {
    setPriceInputs(prev => ({ ...prev, [type]: value }));
  };

  const handlePriceBlur = useCallback((type) => {
    const formattedValue = formatPrice(priceInputs[type]);
    const numericValue = parseFloat(formattedValue.replace(/[^0-9.-]+/g,""));

    if (isNaN(numericValue)) {
      setPriceInputError(prev => ({ ...prev, [type]: true }));
      return;
    }

    setPriceInputError(prev => ({ ...prev, [type]: false }));
    
    let newFrom = type === 'from' ? numericValue : priceRange[0];
    let newTo = type === 'to' ? numericValue : priceRange[1];

    // Ensure 'from' is not greater than 'to'
    if (newFrom > newTo) {
      if (type === 'from') {
        newTo = newFrom;
      } else {
        newFrom = newTo;
      }
    }

    setPriceInputs({
      from: formatPrice(newFrom),
      to: formatPrice(newTo)
    });

    setPriceRange([newFrom, newTo]);
  }, [priceInputs, priceRange, setPriceRange]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (priceFromRef.current && !priceFromRef.current.contains(event.target)) {
        handlePriceBlur('from');
      }
      if (priceToRef.current && !priceToRef.current.contains(event.target)) {
        handlePriceBlur('to');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handlePriceBlur]);

  const handleKeyDown = (e, type) => {
    if (e.key === 'Enter') {
      handlePriceBlur(type);
    }
  };

  return (
    <div className="mb-6">
      <h3 className="font-semibold mb-2">Price</h3>
      <div className="flex items-center space-x-2">
        <div className="flex-1 ml-2">
          <label className="text-sm">From:</label>
          <input
            type="text"
            ref={priceFromRef}
            value={priceInputs.from}
            onChange={(e) => handlePriceChange('from', e.target.value)}
            onBlur={() => handlePriceBlur('from')}
            onKeyDown={(e) => handleKeyDown(e, 'from')}
            className={`w-full p-1 border rounded ${priceInputError.from ? 'border-red-500' : 'border-gray-300'}`}
          />
        </div>
        <div className="flex-1">
          <label className="text-sm">To:</label>
          <input
            type="text"
            ref={priceToRef}
            value={priceInputs.to}
            onChange={(e) => handlePriceChange('to', e.target.value)}
            onBlur={() => handlePriceBlur('to')}
            onKeyDown={(e) => handleKeyDown(e, 'to')}
            className={`w-full p-1 border rounded ${priceInputError.to ? 'border-red-500' : 'border-gray-300'}`}
          />
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;