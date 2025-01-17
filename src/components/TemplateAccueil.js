import React from 'react';
import Programme from './Programme';
import MapComponent from './MapComponent';
import Image from '../assets/yvette-de-wit-NYrVisodQ2M-unsplash.jpg';  
import Partenaire1 from '../assets/partenaire1.png';
import Partenaire2 from '../assets/partenaire2.jpg';
import Partenaire3 from '../assets/partenaire3.jpg';

const placesData = [
    { lat: 48.8588443, lng: 2.2943506, type: 'concert', name: 'Concert 1' },
    { lat: 48.865633, lng: 2.321236, type: 'toilet', name: 'Toilet 1' },
    { lat: 48.860846, lng: 2.337992, type: 'restaurant', name: 'Restaurant 1' },
    { lat: 48.8728443, lng: 2.2943506, type: 'concert', name: 'Concert 2' },
    { lat: 48.875633, lng: 2.321236, type: 'toilet', name: 'Toilet 2' },
    { lat: 48.870846, lng: 2.337992, type: 'restaurant', name: 'Restaurant 2' },
];

const TemplateAccueil = () => {
    return (
        <>
            {/* Section d'accueil avec une image de fond */}
            <section 
                className="relative bg-cover bg-center bg-no-repeat bg-fixed contrast-125"
                style={{ backgroundImage: `url(${Image})` }}
            >
                <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25"></div>
                <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h1 className="text-3xl font-extrabold  text-gray-850 sm:text-5xl">
                            WELCOME TO THE
                            <strong className="block font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-950 to-indigo-500"> Live Event Festival !</strong>
                        </h1>
                        <p className="mt-4 max-w-lg  text-white drop-shadow sm:text-xl/relaxed">
                            Bienvenue sur notre site web. Découvrez les événements à venir et réservez vos billets dès aujourd'hui.
                        </p>
                        <div className="mt-8 ml-36 flex flex-wrap gap-2 text-center">
                            <a
                                href="/Programme"
                                className="block w-full rounded bg-gray-900 px-12 py-3 text-sm font-medium text-white shadow hover:bg-indigo-800 focus:outline-none focus:ring sm:w-auto"
                            >
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section pour la billetterie */}
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                            <img
                                alt="Event Ticket"
                                src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>
                        <div className="lg:py-24">
                            <h2 className="text-3xl font-bold sm:text-4xl">Billeterie</h2>
                            <p className="mt-4 text-gray-600">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius quidem quam repellat.
                            </p>
                            <a
                                href="https://www.ticketmaster.fr/fr"
                                className="mt-8 inline-block rounded bg-gray-900 px-12 py-3 text-sm font-medium text-white transition  hover:bg-indigo-800  focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                Get Started Today
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-indigo-950 text-white">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="mx-auto max-w-lg text-center">
                        <h2 className="text-3xl font-bold sm:text-4xl">Nos partenaires</h2>
                    </div>
                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <a
                            key="partenaire1"
                            className="block rounded-xl border border-gray-950 p-8 shadow-xl transition hover:border-white"
                            href="#"
                        >
                            <img
                                className="w-16 h-16 object-cover rounded-full mx-auto"
                                src={Partenaire1} 
                                alt="Partenaire 1"
                            />
                            <h2 className="mt-4 text-xl font-bold text-white">Partner 1</h2>
                            <p className="mt-1 text-sm text-gray-300">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.
                            </p>
                        </a>
                        <a
                            key="partenaire2"
                            className="block rounded-xl border border-gray-950 p-8 shadow-xl transition hover:border-white"
                            href="#"
                        >
                            <img
                                className="w-16 h-16 object-cover rounded-full mx-auto"
                                src={Partenaire2} 
                                alt="Partenaire 2"
                            />
                            <h2 className="mt-4 text-xl font-bold text-white">Partner 2</h2>
                            <p className="mt-1 text-sm text-gray-300">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.
                            </p>
                        </a>
                        <a
                            key="partenaire3"
                            className="block rounded-xl border border-gray-950 p-8 shadow-xl transition hover:border-white"
                            href="#"
                        >
                            <img
                                className="w-16 h-16 object-cover rounded-full mx-auto"
                                src={Partenaire3} 
                                alt="Partenaire 3"
                            />
                            <h2 className="mt-4 text-xl font-bold text-white">Partner 3</h2>
                            <p className="mt-1 text-sm text-gray-300">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.
                            </p>
                        </a>
                    </div>
                </div>
            </section>

            {/* Section pour afficher le programme des événements */}
            <section className="py-12 bg-gray-100">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <Programme /> 
                </div>
            </section>  

            <section className="py-12 bg-white-100">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold sm:text-4xl ">Carte des Lieux</h2>
                    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                        <MapComponent />
                    </div>
                </div>
            </section>
        </>
    );
};

export default TemplateAccueil;
