// src/components/loadGoogleMaps.js
export const loadGoogleMapsApi = (apiKey) => {
    return new Promise((resolve, reject) => {
      if (window.google && window.google.maps) {
        resolve(window.google);
        return;
      }
  
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
      script.async = true; // Charger de manière asynchrone
      script.defer = true; // Retarder l'exécution
  
      script.onload = () => {
        resolve(window.google);
      };
      script.onerror = () => {
        reject(new Error('Error loading Google Maps API'));
      };
  
      document.body.appendChild(script);
    });
  };
  