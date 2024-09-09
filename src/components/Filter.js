import React from 'react';

const Filter = ({ venues, selectedVenues, onVenueChange }) => {
  return (
    <div className="space-y-4">
      {venues.length === 0 ? (
        <p className="text-gray-500">Aucun lieu disponible.</p>
      ) : (
        venues.map((venue, index) => (
          <label key={`${venue.id}-${index}`} className="flex items-center space-x-2">
        
            <span className="text-lg text-gray-700">{venue.name}</span>
          </label>
        ))
      )}
    </div>
  );
};

export default Filter;
