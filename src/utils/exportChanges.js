// scr/utils/exportChanges.js 

import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

const prepareItemsData = (productData) => {
  return Object.entries(productData).map(([id, { currentData }]) => ({
    Product_ID: id,
    ...currentData,
    Link: `walmart.com/ip/${id}`
  }));
};

export const prepareExportData = (productData) => {
  const updatesData = [];
  Object.entries(productData).forEach(([id, { initialData, currentData }]) => {
    const changes = Object.keys(currentData)
      .filter(key => JSON.stringify(initialData[key]) !== JSON.stringify(currentData[key]))
      .map(key => ({
        'Product_ID': id,
        'Product Name': currentData.name,
        'Field Updated': key,
        'Old Value': JSON.stringify(initialData[key]),
        'New Value': JSON.stringify(currentData[key]),
        'Updated On Or After': new Date().toISOString().split('T')[0],
        'Link': `walmart.com/ip/${id}`
      }));
    updatesData.push(...changes);
  });
  return updatesData;
};

export const exportToExcel = (productData, fileName) => {
  const itemsData = prepareItemsData(productData);
  const updatesData = prepareExportData(productData);

  const wb = XLSX.utils.book_new();
  
  const itemsWs = XLSX.utils.json_to_sheet(itemsData);
  XLSX.utils.book_append_sheet(wb, itemsWs, 'Items');

  const updatesWs = XLSX.utils.json_to_sheet(updatesData);
  XLSX.utils.book_append_sheet(wb, updatesWs, 'Recent Updates');

  const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
  const dataBlob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
  saveAs(dataBlob, fileName);
};