// src/components/FestivalTemplate.js
import React, { useEffect, useRef } from 'react';

const FestivalTemplate = () => {
    const mapRef = useRef(null); // Référence au DOM pour la carte
    const lat = 51.678418; // Latitude
    const lng = 7.809007; // Longitude

    useEffect(() => {
        const loadGoogleMapsScript = () => {
            return new Promise((resolve, reject) => {
                if (document.getElementById('google-maps-script')) {
                    resolve(); // Si le script existe déjà, résolvez la promesse
                    return;
                }

                const script = document.createElement('script');
                script.id = 'google-maps-script';
                script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyD1QBnGqdxOT6c3bU33E3rGH0z3bxX62YA`; // Remplacez par votre clé API
                script.async = true;
                script.defer = true;
                script.onload = () => resolve();
                script.onerror = (error) => reject(error);

                document.body.appendChild(script);
            });
        };

        const initializeMap = () => {
            const mapOptions = {
                center: { lat, lng },
                zoom: 5,
            };

            if (mapRef.current) {
                new window.google.maps.Map(mapRef.current, mapOptions); // Initialisez la carte
            }
        };

        loadGoogleMapsScript()
            .then(initializeMap)
            .catch((error) => {
                console.error('Error loading Google Maps script:', error);
            });
    }, [lat, lng]); // Dépendances pour le useEffect

    return (
        <div>
            <div className="relative bottom-1 font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
                <img src="../../assets/bandeau.jpg" alt="Banner Image" className="absolute inset-0 w-full h-full object-cover" />
                <div className="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
                    <h2 className="sm:text-4xl text-2xl font-bold mb-6">Festival</h2>
                    <p className="sm:text-lg text-base text-center text-gray-200">
                        Embark on unforgettable journeys. Book your dream vacation today!
                    </p>
                </div>
            </div>

            {/* Google Map and Text Section */}
            <div className="bg-gray-100 px-6 py-12 font-[sans-serif]">
                <div className="container mx-auto p-6 bg-white rounded-lg shadow-md flex flex-col md:flex-row gap-10">
                    {/* Google Map Section */}
                    <div className="md:w-1/2" style={{ height: '400px' }}>
                        <div id="map" ref={mapRef} style={{ height: '100%', width: '100%' }}></div>
                    </div>

                    {/* Text Section */}
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-extrabold text-[#150463] mb-4">
                            Immerse Yourself in Creativity
                        </h2>
                        <p className="text-gray-700 text-sm leading-6">
                            Unleash your imagination and explore a world of endless possibilities. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <ul className="list-disc text-sm text-gray-700 space-y-2 pl-4 mt-6">
                            <li>Discover innovative ideas.</li>
                            <li>Create unique projects.</li>
                            <li>Collaborate with like-minded individuals.</li>
                            <li>Transform your visions into reality.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FestivalTemplate;
