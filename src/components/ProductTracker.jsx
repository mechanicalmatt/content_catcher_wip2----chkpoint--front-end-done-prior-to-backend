// src/components/ProductTracker.jsx

import React from 'react';
import { detectChanges } from '../utils/changeDetector';
import detailsIcon from '../assets/details_icon.png';
import detailsIconOpen from '../assets/x_icon.png';

const ProductTracker = ({ id, initialData, currentData, onShowChanges, isChangePanelOpen, onToggleChangePanel }) => {
  if (!currentData) return null;

  const changes = detectChanges(initialData, currentData);
  const hasChanges = changes.length > 0;

  return (
    <div className="grid grid-cols-[80px,40px,minmax(200px,1fr),100px,150px,100px,50px] gap-4 items-center p-3 border-b border-gray-200 hover:bg-yellow-50 transition-colors">
      <span className="text-sm text-gray-600">{id}</span>
      <div className="w-8 h-8">
        <img src={currentData.imageInfo.thumbnailUrl} alt={currentData.name} className="w-full h-full object-contain" />
      </div>
      <a href={`https://www.walmart.com/ip/${id}`} target="_blank" rel="noopener noreferrer" className="font-bold text-blue-500 truncate hover:underline">
        {currentData.name || `Product ${id}`}
      </a>
      <span className="font-bold">${currentData.price?.toFixed(2) || '0.00'}</span>
      <span className="text-sm text-gray-600 truncate">{currentData.sellerName}</span>
      <span className="text-sm text-gray-600 truncate">{currentData.sellerId}</span>
      <button 
        className="w-6 h-6 rounded-full flex items-center justify-center relative"
        onClick={() => {
          if (isChangePanelOpen) {
            onToggleChangePanel();
          } else {
            onShowChanges(id, changes, currentData);
          }
        }}
      >
        <img 
          src={isChangePanelOpen ? detailsIconOpen : detailsIcon} 
          alt="Details" 
          className="w-6 h-6" 
        />
        {hasChanges && (
          <span className="absolute -top-2 -right-2 bg-rose-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
            {changes.length}
          </span>
        )}
      </button>
    </div>
  );
};

export default ProductTracker;