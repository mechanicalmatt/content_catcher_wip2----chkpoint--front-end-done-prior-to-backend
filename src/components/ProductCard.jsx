// src/components/ProductCard.jsx:

import React from 'react';
import wmLogo from '../assets/wm_logo.png';

const ProductCard = ({ product, showFullDescription, setShowFullDescription }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <img src={wmLogo} alt="Walmart Logo" className="w-12 h-12 mr-4" />
        <div>
          <div className="text-2xl font-bold text-blue-600">${product.price?.toFixed(2) || '0.00'}</div>
          <h2 className="text-lg font-semibold">{product.name}</h2>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
        <span className="text-gray-600">Seller:</span>
        <span>{product.sellerName} (ID: {product.sellerId})</span>
        <span className="text-gray-600">In Stock:</span>
        <span>{product.availability?.value === "IN_STOCK" ? "Yes" : "No"}</span>
        <span className="text-gray-600">Rating:</span>
        <span>{product.averageRating} ({product.numberOfReviews} reviews)</span>
        <span className="text-gray-600">Rollback:</span>
        <span>{product.badge?.text === "Rollback" ? "Yes" : "No"}</span>
        <span className="text-gray-600">Sponsored:</span>
        <span>{product.isSponsoredFlag ? "Yes" : "No"}</span>
      </div>
      <div className={`text-sm ${showFullDescription ? '' : 'line-clamp-3'}`}>
        {product.shortDescription}
      </div>
      <button 
        className="mt-2 text-blue-600 hover:underline focus:outline-none" 
        onClick={() => setShowFullDescription(!showFullDescription)}
      >
        {showFullDescription ? 'See less' : 'See more'}
      </button>
    </div>
  );
};

export default ProductCard;