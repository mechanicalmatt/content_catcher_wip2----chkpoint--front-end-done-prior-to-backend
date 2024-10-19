// src/components/Sidebar/utils/formatPrice.js
export const formatPrice = (value) => {
    if (typeof value !== 'string') {
      value = value.toString();
    }
    let numericValue = value.replace(/[^0-9.]/g, '');
    let number = Math.abs(parseFloat(numericValue));
    if (isNaN(number)) return '$0.00';
    if (numericValue === '.') return '$0.';
    number = Math.round(number * 100) / 100;
    return '$' + number.toFixed(2);
  };