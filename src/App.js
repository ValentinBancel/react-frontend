// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Posts from './components/Posts';
import Header from './components/header/Header';
import FestivalTemplate from './components/FestivalTemplate'; // Importer le nouveau composant
import wpApiSettings from './config'; // Importer wpApiSettings

function App() {
    const [siteTitle, setSiteTitle] = useState('');
    const [festivalPage, setFestivalPage] = useState('');
    const [programPage, setProgramPage] = useState('');
    const [ticketPage, setTicketPage] = useState('');

    useEffect(() => {
        setSiteTitle(wpApiSettings.headerTitle || 'Titre par défaut');
        setFestivalPage(wpApiSettings.festivalPage || '/billetterie'); // URL de la page Billetterie
        setProgramPage(wpApiSettings.programPage || '/programme'); // URL de la page Programme
        setTicketPage(wpApiSettings.ticketPage || '/billetterie'); // URL de la page Billetterie
    }, []);

    return (
        <div className="App">
            <Header 
                title={siteTitle} 
                festivalPage={festivalPage} 
                programPage={programPage} 
                ticketPage={ticketPage} 
            />
            <main>
                <Posts />
                <FestivalTemplate /> {/* Ajoutez le composant FestivalTemplate ici */}
            </main>
        </div>
    );
}

export default App;
