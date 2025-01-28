import React, { useState, useEffect } from 'react';
import { Map, APIProvider, Marker, InfoWindow } from '@vis.gl/react-google-maps';
import axios from 'axios';

// API Google Maps Key
const GOOGLE_MAPS_API_KEY = 'AIzaSyBQo5nxo05_KSMmN3lbJNyAaRoZ0zgUNac';

const parisCoordinates = { lat: 48.8566, lng: 2.3522 };

const MapWithCheckboxes = () => {
  const [showToilettes, setShowToilettes] = useState(false);
  const [showBuvettes, setShowBuvettes] = useState(false);
  const [showConcerts, setShowConcerts] = useState(false);
  const [events, setEvents] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  // Charger les événements depuis l'API WordPress
  useEffect(() => {
    axios
      .get('http://localhost/react-wordpress-projet/wordpress/wp-json/tribe/events/v1/events/')
      .then((response) => {
        const eventsData = response.data.events;
        setEvents(eventsData);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des événements', error);
      });
  }, []);

  // Extraire les concerts avec coordonnées valides
  const getConcerts = () => {
    const concerts = events
      .filter(event => event.venue && event.venue.latitude && event.venue.longitude)
      .map(event => ({
        id: event.id,
        lat: parseFloat(event.venue.latitude),
        lng: parseFloat(event.venue.longitude),
        name: event.venue.venue,
        description: `Concert: ${event.title}`,
        url: event.url
      }));
    return concerts;
  };

  const handleFetchCoordinates = async (address) => {
    try {
      const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json`, {
        params: {
          address: address,
          key: GOOGLE_MAPS_API_KEY
        }
      });
      if (response.data.results.length > 0) {
        return response.data.results[0].geometry.location;
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des coordonnées', error);
    }
    return null;
  };

  // Enrichir les lieux sans coordonnées
  useEffect(() => {
    const enrichEventsWithCoordinates = async () => {
      const enrichedEvents = await Promise.all(
        events.map(async (event) => {
          if (event.venue && !event.venue.latitude && event.venue.address) {
            const coords = await handleFetchCoordinates(event.venue.address);
            if (coords) {
              event.venue.latitude = coords.lat;
              event.venue.longitude = coords.lng;
            }
          }
          return event;
        })
      );
      setEvents(enrichedEvents);
    };

    enrichEventsWithCoordinates();
  }, [events]);

  return (
    <div>
      {/* Section des cases à cocher */}
      <div className="checkboxes" style={{ marginBottom: '10px' }}>
        <label>
          <input
            type="checkbox"
            checked={showToilettes}
            onChange={() => setShowToilettes(!showToilettes)}
          />
          Toilettes
        </label>
        <label style={{ marginLeft: '10px' }}>
          <input
            type="checkbox"
            checked={showBuvettes}
            onChange={() => setShowBuvettes(!showBuvettes)}
          />
          Buvettes
        </label>
        <label style={{ marginLeft: '10px' }}>
          <input
            type="checkbox"
            checked={showConcerts}
            onChange={() => setShowConcerts(!showConcerts)}
          />
          Concerts
        </label>
      </div>

      {/* Carte Google Maps */}
      <div className="map-container" style={{ height: '500px', width: '100%' }}>
        <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
          <Map
            mapContainerStyle={{ height: '100%', width: '100%' }}
            zoom={13}
            center={parisCoordinates}
          >
            {/* Affichage des marqueurs en fonction de la sélection */}
            {showToilettes && (
              <>
                <Marker
                  key="toilettes-1"
                  position={{ lat: 48.857, lng: 2.352 }}
                  title="Toilettes 1"
                  onClick={() => setSelectedLocation({ name: 'Toilettes 1', description: 'Toilettes publiques situées près du parc.', lat: 48.857, lng: 2.352 })}
                />
                <Marker
                  key="toilettes-2"
                  position={{ lat: 48.856, lng: 2.354 }}
                  title="Toilettes 2"
                  onClick={() => setSelectedLocation({ name: 'Toilettes 2', description: 'Toilettes accessibles aux personnes handicapées.', lat: 48.856, lng: 2.354 })}
                />
              </>
            )}
            {showBuvettes && (
              <>
                <Marker
                  key="buvettes-1"
                  position={{ lat: 48.858, lng: 2.353 }}
                  title="Buvette 1"
                  onClick={() => setSelectedLocation({ name: 'Buvette 1', description: 'Petite buvette avec des boissons rafraîchissantes.', lat: 48.858, lng: 2.353 })}
                />
                <Marker
                  key="buvettes-2"
                  position={{ lat: 48.859, lng: 2.355 }}
                  title="Buvette 2"
                  onClick={() => setSelectedLocation({ name: 'Buvette 2', description: 'Buvette avec des snacks et des boissons.', lat: 48.859, lng: 2.355 })}
                />
              </>
            )}
            {showConcerts && getConcerts().map((location) => (
              <Marker
                key={`concerts-${location.id}`}
                position={{ lat: location.lat, lng: location.lng }}
                title={location.name}
                onClick={() => setSelectedLocation(location)}
              />
            ))}

            {/* Affichage de la fenêtre d'informations */}
            {selectedLocation && (
              <InfoWindow
                position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }}
                onCloseClick={() => setSelectedLocation(null)}
              >
                <div>
                  <h3>{selectedLocation.name}</h3>
                  <p>{selectedLocation.description}</p>
                  {selectedLocation.url && (
                    <a href={selectedLocation.url} target="_blank" rel="noopener noreferrer">
                      Plus d'infos
                    </a>
                  )}
                </div>
              </InfoWindow>
            )}
          </Map>
        </APIProvider>
      </div>
    </div>
  );
};

export default MapWithCheckboxes;
