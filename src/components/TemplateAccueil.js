import React from 'react';
import Programme from './Programme';
import FestivalTemplate from './FestivalTemplate';  // Importer le composant FestivalTemplate

const placesData = [
    { lat: 48.8588443, lng: 2.2943506, type: 'concert', name: 'Concert 1' },
    { lat: 48.865633, lng: 2.321236, type: 'toilet', name: 'Toilet 1' },
    { lat: 48.860846, lng: 2.337992, type: 'restaurant', name: 'Restaurant 1' },
    { lat: 48.8728443, lng: 2.2943506, type: 'concert', name: 'Concert 2' },
    { lat: 48.875633, lng: 2.321236, type: 'toilet', name: 'Toilet 2' },
    { lat: 48.870846, lng: 2.337992, type: 'restaurant', name: 'Restaurant 2' },
    // Ajoutez d'autres lieux ici
];

const TemplateAccueil = () => {
    return (
        <>
            {/* Section d'accueil avec une image de fond */}
            <section className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
                <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25"></div>
                <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
                            Let us find your
                            <strong className="block font-extrabold text-blue-500"> Lorem Ipsum. </strong>
                        </h1>
                        <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
                        </p>
                        <div className="mt-8 flex flex-wrap gap-2 text-center">
                            <a
                                href="#"
                                className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-indigo-950 focus:outline-none focus:ring sm:w-auto"
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
                                href="https://tickets.paris2024.org/"
                                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                Get Started Today
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section pour les partenaires */}
            <section className="bg-blue-900 text-white">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="mx-auto max-w-lg text-center">
                        <h2 className="text-3xl font-bold sm:text-4xl">Nos partenaires</h2>
                    </div>
                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {Array(3).fill().map((_, index) => (
                            <a
                                key={index}
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-white"
                                href="#"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-10 text-pink-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path
                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                    />
                                </svg>
                                <h2 className="mt-4 text-xl font-bold text-white">Digital campaigns</h2>
                                <p className="mt-1 text-sm text-gray-300">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.
                                </p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section pour afficher le programme des événements */}
            <section className="py-12 bg-gray-100">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <Programme /> 
                </div>
            </section>  

            {/* Section pour afficher le template du festival */}
            <section className="py-12 bg-gray-250">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <FestivalTemplate />  {/* Ajout de FestivalTemplate */}
                </div>
            </section>
        </>
    );
};

export default TemplateAccueil;
