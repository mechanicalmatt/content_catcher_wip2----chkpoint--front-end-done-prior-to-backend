// src/components/TrackedFields.jsx:

import React from 'react';
import { TRACKED_FIELDS } from '../utils/constants';

const TrackedFields = () => {
  return (
    <div className="p-4">
      <h3 className="font-semibold mb-2">Tracked Fields</h3>
      {Object.entries(TRACKED_FIELDS).map(([category, fields]) => (
        <div key={category} className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-1">{category}</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {fields.map(field => (
              <li key={field}>{field}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TrackedFields;