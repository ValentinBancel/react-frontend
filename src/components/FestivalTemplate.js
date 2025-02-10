import React from 'react';
import MapComponent from './MapComponent';
import Programme from './Programme';
import FAQ from './FAQ';
import NewsSection from './NewsSection';
import eventTicketImage from '../assets/melissa-askew-AUXanrckXn0-unsplash.jpg';

function FestivalTemplate() {
  return (
    <div>
      {/* Section principale */}
      <section className="py-12 bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt="Event Ticket"
                src={eventTicketImage}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">Le Festival</h2>
              <p className="mt-4 text-gray-600">
                Bienvenue au Festival, où musique, art et culture se rencontrent pour offrir une expérience inoubliable !
                Découvrez les artistes, les lieux et les événements spéciaux que nous avons préparés pour vous.
              </p>
              <div className="mt-8 inline-block rounded bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-800 focus:outline-none focus:ring focus:ring-yellow-400">
                <a href="#programme">Voir le programme</a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Section Carte des lieux */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl mb-6">Carte des Lieux</h2>
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <MapComponent />
          </div>
        </div>
      </section>
    </div>
  );
}

export default FestivalTemplate;
