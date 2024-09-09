// src/components/Footer.js
import React from 'react';

function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-950">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="/" className="flex items-center">
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                                Live Event
                            </span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Ressources</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="/festival" className="hover:underline">Festival</a>
                                </li>
                                <li>
                                    <a href="/programme" className="hover:underline">Programme</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Suivez-nous</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://github.com/your-github" className="hover:underline">Github</a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/your-discord" className="hover:underline">Discord</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Légal</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="/confidentialite" className="hover:underline">Politique de confidentialité</a>
                                </li>
                                <li>
                                    <a href="/mentions-legales" className="hover:underline">Mentions légales</a>
                                </li>
                                <li className="mb-4">
                                    <a href="/contact" className="hover:underline">Contactez-nous</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © {new Date().getFullYear()} <a href="/" className="hover:underline">Live Event™</a>. Tous droits réservés.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="#" className="text-gray-500 hover:text-white dark:hover:text-white">
                            {/* Facebook SVG */}
                        </a>
                        
                        <a href="#" className="text-gray-500 hover:text-white dark:hover:text-white ms-5">
                            {/* Twitter SVG */}
                        </a>
                        
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer; // Assurez-vous que l'export par défaut est présent
