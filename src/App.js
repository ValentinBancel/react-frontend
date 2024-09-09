// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Posts from './components/Posts';
import Header from './components/Header';
import FestivalTemplate from './components/FestivalTemplate';
import TemplateAccueil from './components/TemplateAccueil';
import Programme from './components/Programme';
import GroupeDetails from './components/GroupeDetails';
import Footer from './components/Footer';
import Contact from './components/Contact'; // Importer le composant Contact
import wpApiSettings from './config';

const placesData = [
    { lat: 48.8588443, lng: 2.2943506, type: 'concert', name: 'Concert 1' },
    { lat: 48.865633, lng: 2.321236, type: 'toilet', name: 'Toilet 1' },
    { lat: 48.860846, lng: 2.337992, type: 'restaurant', name: 'Restaurant 1' },
    // Ajoutez d'autres lieux ici
];

function App() {
    const [siteTitle, setSiteTitle] = useState('');
    const [festivalPage, setFestivalPage] = useState('');
    const [programPage, setProgramPage] = useState('');
    const [ticketPage, setTicketPage] = useState('');

    useEffect(() => {
        setSiteTitle(wpApiSettings.headerTitle || 'live event');
        setFestivalPage(wpApiSettings.festivalPage || '/festival');
        setProgramPage(wpApiSettings.programPage || '/programme');
        setTicketPage(wpApiSettings.ticketPage || '/billetterie');
    }, []);

    return (
        <Router>
            <div className="App flex flex-col min-h-screen">
                <Header 
                    title={siteTitle} 
                    festivalPage={festivalPage} 
                    programPage={programPage} 
                    ticketPage={ticketPage} 
                />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<TemplateAccueil places={placesData} />} />
                        <Route path="/festival" element={<FestivalTemplate places={placesData} />} />
                        <Route path="/posts" element={<Posts />} />
                        <Route path="/programme" element={<Programme />} />
                        <Route path="/groupe/:id" element={<GroupeDetails places={placesData} />} />
                        <Route path="/contact" element={<Contact />} /> {/* Ajouter la route pour Contact */}
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
