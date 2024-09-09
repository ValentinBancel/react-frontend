import React, { useEffect, useState } from 'react';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import { loadGoogleMapsApi } from './loadGoogleMaps';

const ConcertMap = React.memo(({ locations }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const apiKey = 'AIzaSyD1QBnGqdxOT6c3bU33E3rGH0z3bxX62YA'; // Remplacez par votre clé API

  useEffect(() => {
    console.log('ConcertMap mounted');
    loadGoogleMapsApi(apiKey)
      .then(() => {
        setIsLoaded(true);
      })
      .catch(err => {
        console.error("Error loading Google Maps API:", err);
      });

    return () => {
      console.log('ConcertMap unmounted');
    };
  }, [apiKey]);

  const defaultCenter = {
    lat: 48.8566, // Latitude de Paris
    lng: 2.3522,  // Longitude de Paris
  };

  let center = defaultCenter;
  let zoom = 5;

  // Filtrer les emplacements valides
  const validLocations = locations.filter(location => {
    const lat = parseFloat(location.latitude);
    const lng = parseFloat(location.longitude);
    return !isNaN(lat) && !isNaN(lng);
  });

  // Si des emplacements valides existent, centrez sur le premier emplacement
  if (validLocations.length > 0) {
    const firstLocation = validLocations[0];
    center = {
      lat: parseFloat(firstLocation.latitude),
      lng: parseFloat(firstLocation.longitude),
    };
    zoom = 10;
  }

  if (!isLoaded) {
    return <div>Loading map...</div>;
  }

  if (validLocations.length === 0) {
    return <div>No valid locations available for the map.</div>;
  }

  return (
    <APIProvider googleMapsApiKey={apiKey}>
      <Map
        defaultCenter={center}
        defaultZoom={zoom}
        style={{ width: '800px', height: '400px' }} // Assurez-vous que les dimensions sont définies
      >
        {validLocations.map((location) => (
          <Marker
            key={location.id}
            longitude={parseFloat(location.longitude)}
            latitude={parseFloat(location.latitude)}
          />
        ))}
      </Map>
    </APIProvider>
  );
});

export default ConcertMap;
