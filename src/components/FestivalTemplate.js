import React from 'react';
import MapComponent from './MapComponent';
import eventTicketImage from '../assets/melissa-askew-AUXanrckXn0-unsplash.jpg';  

function FestivalTemplate() {
  return (
    <div>
      <section className="py-12 bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              {/* Utilisez l'image importée */}
              <img
                alt="Event Ticket"
                src={eventTicketImage}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">Le Festival</h2>
              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius quidem quam repellat.
              </p>
              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius quidem quam repellat.
              </p>
              <div className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400">
                <a href="/programme">Get Started</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-white-100">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">Carte des Lieux</h2>
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            {/* Intégration du composant MapComponent */}
            <MapComponent />
          </div>
        </div>
      </section>
    </div>
  );
}

export default FestivalTemplate;
