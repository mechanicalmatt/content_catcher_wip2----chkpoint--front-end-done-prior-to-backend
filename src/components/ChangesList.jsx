// src/components/ChangesList.jsx

import React from 'react';

const ChangesList = ({ product, changes }) => {
  const formatValue = (key, value) => {
    if (typeof value === 'boolean') return value ? 'Yes' : 'No';
    if (typeof value === 'object') return JSON.stringify(value);
    return value;
  };

  const formatLabel = (label) => {
    return label.split(/(?=[A-Z])/).join(' ').replace(/^\w/, c => c.toUpperCase());
  };

  const renderSection = (title, fields) => (
    <div className="mb-6">
      <h4 className="text-lg font-semibold mb-2 text-blue-500">{title}</h4>
      <div className="grid grid-cols-2 gap-2">
        {fields.map(field => (
          <React.Fragment key={field}>
            <span className="text-sm font-medium text-gray-600">{formatLabel(field)}:</span>
            <span className="text-sm text-gray-800">{formatValue(field, product[field])}</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );

  return (
    <div className="p-4 h-full overflow-y-auto">
      <div className="mb-4 text-center">
        <img src={product.imageInfo.thumbnailUrl} alt={product.name} className="max-w-full h-auto max-h-48 inline-block" />
      </div>
      {renderSection('Product Info', ['name', 'price', 'averageRating', 'numberOfReviews'])}
      {renderSection('Seller Info', ['sellerName', 'sellerId', 'offerId'])}
      {renderSection('Product State', ['isSponsoredFlag', 'badge'])}

      <hr className="my-6 border-t border-gray-300" />
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2 text-blue-500">Changes Detected</h4>
        {changes.length > 0 ? (
          <div className="grid grid-cols-2 gap-2">
            {changes.map(({ key, oldValue, newValue }) => (
              <React.Fragment key={key}>
                <span className="text-sm font-medium text-gray-600">{formatLabel(key)}:</span>
                <span className="text-sm">
                  <span className="line-through text-red-500">{formatValue(key, oldValue)}</span>
                  <span className="mx-1">➜</span>
                  <span className="text-green-500">{formatValue(key, newValue)}</span>
                </span>
              </React.Fragment>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-600">No changes detected.</p>
        )}
      </div>
    </div>
  );
};

export default ChangesList;