// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importer le Router
import Posts from './components/Posts';
import Header from './components/Header';
import FestivalTemplate from './components/FestivalTemplate'; // Importer le composant FestivalTemplate
import TemplateAccueil from './components/TemplateAccueil'; // Importer le composant TemplateAccueil
import wpApiSettings from './config'; // Importer wpApiSettings

function App() {
    const [siteTitle, setSiteTitle] = useState('');
    const [festivalPage, setFestivalPage] = useState('');
    const [programPage, setProgramPage] = useState('');
    const [ticketPage, setTicketPage] = useState('');

    useEffect(() => {
        setSiteTitle(wpApiSettings.headerTitle || 'live event');
        setFestivalPage(wpApiSettings.festivalPage || '/festival'); // URL de la page Billetterie
        setProgramPage(wpApiSettings.programPage || '/programme'); // URL de la page Programme
        setTicketPage(wpApiSettings.ticketPage || '/billetterie'); // URL de la page Billetterie
    }, []);

    return (
        <Router>
            <div className="App">
                <Header 
                    title={siteTitle} 
                    festivalPage={festivalPage} 
                    programPage={programPage} 
                    ticketPage={ticketPage} 
                />
                <main>
                    <Routes>
                        <Route path="/" element={<TemplateAccueil />} /> {/* Page d'accueil */}
                        <Route path="/festival" element={<FestivalTemplate />} /> {/* Page Festival */}
                        <Route path="/posts" element={<Posts />} /> {/* Page Posts */}
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
