// src/hooks/useProductData.js

import { useState, useEffect } from 'react';
import { generateSyntheticData } from '../utils/dataGenerator';

export const useProductData = (productIds) => {
  const [productData, setProductData] = useState(() => {
    const initialData = {};
    productIds.forEach(id => {
      initialData[id] = {
        initialData: generateSyntheticData(id),
        currentData: generateSyntheticData(id)
      };
    });
    return initialData;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setProductData(prevData => {
        const newData = { ...prevData };
        productIds.forEach(id => {
          newData[id] = {
            ...newData[id],
            currentData: generateSyntheticData(id, newData[id]?.currentData)
          };
        });
        return newData;
      });
    }, 60000);

    return () => clearInterval(interval);
  }, [productIds]);

  return productData;
};