import React from 'react';
import SidebarHeader from './SidebarHeader';
import UpdatesFilter from './filters/UpdatesFilter';
import SellerFilter from './filters/SellerFilter';
import SellerIdFilter from './filters/SellerIdFilter';
import PriceFilter from './filters/PriceFilter';
import SalesUnitTypeFilter from './filters/SalesUnitTypeFilter';
import ToggleFilter from './filters/ToggleFilter';
import BrandFilter from './filters/BrandFilter';

const Sidebar = ({ 
  viewOption,
  setViewOption,
  sellers,
  selectedSellers,
  setSelectedSellers,
  selectedSellerIds,
  setSelectedSellerIds,
  priceRange,
  setPriceRange,
  selectedSalesUnitTypes,
  setSelectedSalesUnitTypes,
  hasVariants,
  setHasVariants,
  isSponsored,
  setIsSponsored,
  onRollback,
  setOnRollback,
  selectedBrands,
  setSelectedBrands,
  clearFilters,
  onExportChanges
}) => {
  return (
    <div className="w-64 h-screen bg-white shadow-lg flex flex-col">
      <SidebarHeader />
      <div className="font-bogle-regular-italic flex-1 overflow-y-auto p-4">
        <button
          className="w-full px-2 py-1 mb-4 border border-blue-600 bg-white text-blue-600 text-sm rounded hover:border-lime-700 hover:bg-lime-700 hover:text-white transition-colors duration-200 active:bg-lime-900 active:text-white active:scale-95 transform"
          onClick={onExportChanges}
        >
          <span>Export to Excel (.xlsx)</span>
        </button>
        
        <div className="border-b border-gray-300 mb-4"></div>

        <button 
          onClick={clearFilters} 
          className="w-full px-2 py-1 mb-4 border border-blue-600 bg-white text-blue-600 text-sm rounded hover:bg-blue-600 hover:text-white transition-colors duration-200 active:bg-blue-800 active:text-white active:scale-95 transform"
        >
          Clear Filters
        </button>
        <UpdatesFilter viewOption={viewOption} setViewOption={setViewOption} />
        <BrandFilter selectedBrands={selectedBrands} setSelectedBrands={setSelectedBrands} />
        <SellerFilter sellers={sellers} selectedSellers={selectedSellers} setSelectedSellers={setSelectedSellers} />
        <SellerIdFilter sellers={sellers} selectedSellerIds={selectedSellerIds} setSelectedSellerIds={setSelectedSellerIds} />
        <PriceFilter priceRange={priceRange} setPriceRange={setPriceRange} />
        <SalesUnitTypeFilter selectedSalesUnitTypes={selectedSalesUnitTypes} setSelectedSalesUnitTypes={setSelectedSalesUnitTypes} />
        <ToggleFilter label="Has Variants" values={hasVariants} setValues={setHasVariants} />
        <ToggleFilter label="Sponsored" values={isSponsored} setValues={setIsSponsored} />
        <ToggleFilter label="On Rollback" values={onRollback} setValues={setOnRollback} />
      </div>
    </div>
  );
};

export default Sidebar;