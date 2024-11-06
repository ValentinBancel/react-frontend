import React from 'react';
import { createRoot } from 'react-dom/client'; // Importer la nouvelle API createRoot
import './index.css'; 
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';

// Rendre l'application principale dans l'élément "root"
const rootElement = document.getElementById('root');
if (rootElement) {
    const root = createRoot(rootElement); // Utiliser createRoot ici
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}

// Définir les pages pour le menu Header
const festivalPage = "/festival";
const programPage = "/programme";
const ticketPage = "https://tickets.paris2024.org/";

// Vérifier si l'élément "react-header" existe, puis l'insérer dans le DOM
const headerElement = document.getElementById('react-header');
if (headerElement) {
    const headerRoot = createRoot(headerElement); // Utiliser createRoot pour Header
    headerRoot.render(
        <Header
            title="Mon Titre de Header"
            festivalPage={festivalPage}
            programPage={programPage}
            ticketPage={ticketPage}
        />
    );
}

// Définir les pages pour Footer
const legalPage = "/mentions-legales";
const privacyPage = "/confidentialite";
const contactPage = "/contact";

// Vérifier si l'élément "react-footer" existe, puis l'insérer dans le DOM
const footerElement = document.getElementById('react-footer');
if (footerElement) {
    const footerRoot = createRoot(footerElement); // Utiliser createRoot pour Footer
    footerRoot.render(
        <Footer
            legalPage={legalPage}
            privacyPage={privacyPage}
            contactPage={contactPage}
        />
    );
}
