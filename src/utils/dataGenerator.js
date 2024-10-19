// src/utils/dataGenerator.js

import placeholderImage from '../assets/wm_logo.png';

export const generateSyntheticData = (id, previousData) => {
  // If there's previous data, 80% chance to return it unchanged
  if (previousData && Math.random() < 0.8) {
    return previousData;
  }

  return {
    id,
    buyBoxSuppression: Math.random() < 0.1,
    name: `Product ${id} - ${Math.random().toString(36).substring(7)}`,
    shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna incididunt ut labore et dolore magnaincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageInfo: {
      thumbnailUrl: placeholderImage,
      size: "200-300"
    },
    salesUnitType: "EACH",
    sellerId: Math.random().toString(36).substring(7).toUpperCase(),
    sellerName: `Seller ${Math.floor(Math.random() * 100)}`,
    availability: {
      display: Math.random() < 0.8 ? "In stock" : "Out of stock",
      value: Math.random() < 0.8 ? "IN_STOCK" : "OUT_OF_STOCK"
    },
    offerId: Math.random().toString(36).substring(7).toUpperCase(),
    description: "Detailed product description would go here.",
    flag: "",
    badge: {
      text: Math.random() < 0.3 ? "Rollback" : "",
      className: "dark-gray"
    },
    image: placeholderImage,
    isOutOfStock: Math.random() < 0.2,
    price: +(Math.random() * 100 + 10).toFixed(2),
    averageRating: +(Math.random() * 5).toFixed(1),
    numberOfReviews: Math.floor(Math.random() * 500),
    salesUnit: "EACH",
    variantList: [],
    isVariantTypeSwatch: false,
    isSponsoredFlag: Math.random() < 0.1
  };
};