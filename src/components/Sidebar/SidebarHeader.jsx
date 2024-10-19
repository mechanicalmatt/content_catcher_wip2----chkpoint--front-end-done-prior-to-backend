// src/components/Sidebar/SidebarHeader.jsx

import React from 'react';
import wmLogo from '../../assets/wm_logo.png';

const SidebarHeader = () => {
  return (
    <div className="bg-blue-800 text-white p-4 flex justify-center">
      <img src={wmLogo} alt="WM Logo" className="w-8 h-8 mr-2" />
      <h1 className="text-xl font-bogle-bold">WM Item Tracker</h1>
    </div>
  );
};

export default SidebarHeader;