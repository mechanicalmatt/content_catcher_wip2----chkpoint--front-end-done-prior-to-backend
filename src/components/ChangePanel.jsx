// drc/components/ChangePanel.jsx

import React from 'react';
import ChangesList from './ChangesList';

const ChangePanel = ({ selectedChanges, handleToggleChangePanel }) => (
  <div className={`w-0 h-screen bg-white shadow-lg transition-all duration-300 ${selectedChanges ? 'w-96' : ''} overflow-hidden`}>
    {selectedChanges && (
      <>
        <div className="bg-blue-800 text-white p-4 flex justify-between items-center sticky top-0 z-20">
          <h3 className="text-lg font-bold">{selectedChanges.id}: Details & Updates</h3>
          <button className="text-2xl" onClick={handleToggleChangePanel}>×</button>
        </div>
        <ChangesList
          product={selectedChanges.currentData}
          changes={selectedChanges.changes}
        />
      </>
    )}
  </div>
);

export default ChangePanel;