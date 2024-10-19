// src/components/Sidebar/MainContent.jsx

import React from 'react';
import ProductTracker from './ProductTracker';

const MainContent = ({ productIds, productData, handleShowChanges, selectedChanges, handleToggleChangePanel }) => (
  <div className="flex-1 overflow-y-auto p-4">
    <div className="mb-4 flex">
      <input
        type="text"
        placeholder="Input Catalog_IDs..."
        className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-300"
      />
      <button
        className="p-2 pl-3 pr-3 border ml-2 bg-white border-gray-300 rounded-md text-gray-300 hover:bg-blue-600 hover:text-white transition-colors duration-200 active:bg-blue-800 active:text-white active:scale-95 transform"
        aria-label="Submit"
      >
        ➜
      </button>
    </div>
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="grid grid-cols-[80px,40px,minmax(200px,1fr),100px,150px,100px,50px] gap-4 items-center p-4 bg-gray-50 font-bold sticky top-0 z-10 border-b border-gray-200">
        <span>ID</span>
        <span>Image</span>
        <span>Name</span>
        <span>Price</span>
        <span>Seller Name</span>
        <span>Seller ID</span>
        <span>Changes</span>
      </div>
      <div className="max-h-[calc(100vh-200px)] overflow-y-auto">
        {productIds.map(id => (
          <ProductTracker
            key={id}
            id={id}
            initialData={productData[id]?.initialData}
            currentData={productData[id]?.currentData}
            onShowChanges={handleShowChanges}
            isChangePanelOpen={selectedChanges?.id === id}
            onToggleChangePanel={handleToggleChangePanel}
          />
        ))}
      </div>
    </div>
  </div>
);

export default MainContent;