// src/App.jsx

import React, { useState } from 'react';
import './index.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import ChangePanel from './components/ChangePanel';
import { useProductData } from './hooks/useProductData';
import { exportToExcel } from './utils/exportChanges';

function App() {
  const [productIds] = useState(['45787657', '35785428', '669646814', '123456789', '987654321']);
  const productData = useProductData(productIds);

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [viewOption, setViewOption] = useState('All');
  const [selectedChanges, setSelectedChanges] = useState(null);
  const [rotatedIconId, setRotatedIconId] = useState(null);

  // Extract unique sellers from product data
  const sellers = [...new Set(Object.values(productData).map(p => ({ id: p.currentData.sellerId, name: p.currentData.sellerName })))];

  // New state for additional filters
  const [selectedSellers, setSelectedSellers] = useState(sellers.map(seller => seller.id));
  const [selectedSellerIds, setSelectedSellerIds] = useState(sellers.map(seller => seller.id));
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedSalesUnitTypes, setSelectedSalesUnitTypes] = useState(['/each', '/oz', '/lb']);
  const [hasVariants, setHasVariants] = useState(['Either']);
  const [isSponsored, setIsSponsored] = useState(['Either']);
  const [onRollback, setOnRollback] = useState(['Either']);

  const handleShowChanges = (id, changes, currentData) => {
    setSelectedChanges({ id, changes, currentData });
    setRotatedIconId(id);
  };

  const handleToggleChangePanel = () => {
    setSelectedChanges(null);
    setRotatedIconId(null);
  };

  const clearFilters = () => {
    setSelectedBrands([]);
    setViewOption('All');
    setSelectedSellers(sellers.map(seller => seller.id));
    setSelectedSellerIds(sellers.map(seller => seller.id));
    setPriceRange([0, 1000]);
    setSelectedSalesUnitTypes(['/each', '/oz', '/lb']);
    setHasVariants(['Either']);
    setIsSponsored(['Either']);
    setOnRollback(['Either']);
  };

  const handleExportChanges = () => {
    exportToExcel(productData, 'product-data.xlsx');
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar
        viewOption={viewOption}
        setViewOption={setViewOption}
        sellers={sellers}
        selectedSellers={selectedSellers}
        setSelectedSellers={setSelectedSellers}
        selectedSellerIds={selectedSellerIds}
        setSelectedSellerIds={setSelectedSellerIds}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        selectedSalesUnitTypes={selectedSalesUnitTypes}
        setSelectedSalesUnitTypes={setSelectedSalesUnitTypes}
        hasVariants={hasVariants}
        setHasVariants={setHasVariants}
        isSponsored={isSponsored}
        setIsSponsored={setIsSponsored}
        onRollback={onRollback}
        setOnRollback={setOnRollback}
        selectedBrands={selectedBrands}
        setSelectedBrands={setSelectedBrands}
        clearFilters={clearFilters}
        onExportChanges={handleExportChanges}
      />
      <MainContent
        productIds={productIds}
        productData={productData}
        handleShowChanges={handleShowChanges}
        selectedChanges={selectedChanges}
        handleToggleChangePanel={handleToggleChangePanel}
        rotatedIconId={rotatedIconId}
      />
      <ChangePanel
        selectedChanges={selectedChanges}
        handleToggleChangePanel={handleToggleChangePanel}
      />
    </div>
  );
}

export default App;