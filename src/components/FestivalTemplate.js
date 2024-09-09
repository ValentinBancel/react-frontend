import React, { useState, useEffect } from 'react';
import ConcertMap from './ConcertMap';
import Filter from './Filter'; // Importez votre composant Filter

const FestivalTemplate = () => {
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [events, setEvents] = useState([]); // État pour stocker les événements
  const [selectedVenues, setSelectedVenues] = useState([]); // État pour les lieux sélectionnés
  const [venues, setVenues] = useState([]); // État pour les lieux disponibles

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost/react-wordpress-projet/wordpress/wp-json/tribe/events/v1/events');
        const data = await response.json();
        setEvents(data.events); // Stocker les événements dans l'état
  
        // Extraire les lieux (venues) uniques
        const uniqueVenues = Array.from(new Set(data.events.map(event => event.venue))).filter(Boolean);
        setVenues(uniqueVenues);
      } catch (error) {
        console.error('Erreur lors de la récupération des événements:', error);
      }
    };
  
    fetchEvents();
  }, []);  // L'effet s'exécute une seule fois au montage

  const handleGroupClick = (group) => {
    const filteredEvents = events.filter(event => event.title === group);
    const filteredLocations = filteredEvents.map(event => {
      if (event.venue) {
        console.log('Venue data:', event.venue); // Ajoutez un log pour vérifier les données de la venue
        return {
          id: event.venue.id,
          latitude: event.venue.latitude || 48.8566, // Remplacez par les vraies coordonnées
          longitude: event.venue.longitude || 2.3522,  // Remplacez par les vraies coordonnées
          address: event.venue.address || 'Adresse non fournie',
        };
      }
      return null;
    }).filter(location => location !== null);

    console.log('Filtered locations:', filteredLocations); // Log pour voir les lieux filtrés
    setSelectedLocations(filteredLocations);
  };

  const handleVenueChange = (venueName, isChecked) => {
    if (isChecked) {
      setSelectedVenues([...selectedVenues, venueName]);
    } else {
      setSelectedVenues(selectedVenues.filter(venue => venue !== venueName));
    }
  };

  useEffect(() => {
    // Mettre à jour les lieux sélectionnés en fonction des lieux filtrés
    const updatedLocations = venues.filter(venue => selectedVenues.includes(venue.name));
    setSelectedLocations(updatedLocations); // Mettez à jour les lieux affichés sur la carte
  }, [selectedVenues, venues]); // Exécutez cet effet lorsque selectedVenues ou venues changent

  // Groupes disponibles à partir des événements
  const groups = [...new Set(events.map(event => event.title))];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Festival Template</h1>
      <h2 className="text-2xl font-semibold mb-4">Sélectionner un groupe :</h2>
      <div className="flex flex-wrap justify-center mb-6">
        {groups.map(group => (
          <button 
            key={group} 
            onClick={() => handleGroupClick(group)} 
            className="bg-blue-500 text-white px-4 py-2 m-2 rounded hover:bg-blue-600 transition duration-200"
          >
            {group}
          </button>
        ))}
      </div>
      <h2 className="text-2xl font-semibold mb-4">Sélectionner des lieux :</h2>
      <div className="mb-6">
        <Filter venues={venues} selectedVenues={selectedVenues} onVenueChange={handleVenueChange} />
      </div>
      <div className="h-96">
        <ConcertMap locations={selectedLocations} />
      </div>
    </div>
  );
};

export default FestivalTemplate;
