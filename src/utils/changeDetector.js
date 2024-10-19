// src/utils/changeDetector.js

export const detectChanges = (initialData, currentData) => {
    return Object.keys(currentData)
      .filter(key => JSON.stringify(initialData[key]) !== JSON.stringify(currentData[key]))
      .map(key => ({
        key,
        oldValue: initialData[key],
        newValue: currentData[key]
      }));
  };