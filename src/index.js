import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Assurez-vous que ce fichier est importé
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// Définir les pages pour le menu
const festivalPage = "/festival";
const programPage = "/programme";
const ticketPage = "https://tickets.paris2024.org/";

// Vérifier si l'élément "react-header" existe
const headerElement = document.getElementById('react-header');
if (headerElement) {
    ReactDOM.render(
        <Header
            title="Mon Titre de Header"
            festivalPage={festivalPage}
            programPage={programPage}
            ticketPage={ticketPage}
        />,
        headerElement
    );
}

// Définir les pages pour du footer
const legalPage = "/mentions-legales";
const privacyPage = "/confidentialite";
const contactPage = "/contact";

// Vérifier si l'élément "react-footer" existe
const footerElement = document.getElementById('react-footer');
if (footerElement) {
    ReactDOM.render(
        <Footer
            legalPage={legalPage}
            privacyPage={privacyPage}
            contactPage={contactPage}
        />,
        footerElement
    );
}
