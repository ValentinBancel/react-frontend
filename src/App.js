import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Posts from './components/Posts';
import Header from './components/Header';
import FestivalTemplate from './components/FestivalTemplate';
import TemplateAccueil from './components/TemplateAccueil';  // Assurez-vous que TemplateAccueil contient MapComponent
import Programme from './components/Programme';
import GroupeDetails from './components/GroupeDetails';
import Footer from './components/Footer';
import Contact from './components/Contact';  // Importer le composant Contact
import wpApiSettings from './config';
import Confidentialite from './components/Confidentialite';  // Importer le composant Confidentialite
import Mentionlegal from './components/mentionlegal';

function App() {
    const [siteTitle, setSiteTitle] = useState('');
    const [festivalPage, setFestivalPage] = useState('');
    const [programPage, setProgramPage] = useState('');
    const [ticketPage, setTicketPage] = useState('');

    // Charger les configurations via wpApiSettings
    useEffect(() => {
        setSiteTitle(wpApiSettings.headerTitle || 'live event');
        setFestivalPage(wpApiSettings.festivalPage || '/festival');
        setProgramPage(wpApiSettings.programPage || '/programme');
        setTicketPage(wpApiSettings.ticketPage || '/billetterie');
    }, []);

    return (
        <Router>
            <div className="App flex flex-col min-h-screen">
                {/* Header avec les liens de navigation */}
                <Header 
                    title={siteTitle} 
                    festivalPage={festivalPage} 
                    programPage={programPage} 
                    ticketPage={ticketPage} 
                />
                <main className="flex-grow">
                    {/* Routes pour les différentes pages */}
                    <Routes>
                        <Route path="/" element={<TemplateAccueil />} /> 
                        {/* placesData est passé à TemplateAccueil */}
                        <Route path="/festival" element={<FestivalTemplate />} />
                        <Route path="/posts" element={<Posts />} />
                        <Route path="/programme" element={<Programme />} />
                        <Route path="/groupe/:id" element={<GroupeDetails />} />
                        <Route path="/contact" element={<Contact />} /> {/* Route pour la page Contact */}
                        <Route path="/confidentialite" element={<Confidentialite />} /> {/* Route pour la politique de confidentialité */}
                        <Route path="/mentions-legales" element={<Mentionlegal />} /> {/* Route pour les mentions légales */}
                    </Routes>
                </main>
                {/* Footer présent sur toutes les pages */}
                <Footer />
            </div>
        </Router>
    );
}

export default App;
