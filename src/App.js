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
import Contact from './components/Contact';  
import wpApiSettings from './config';
import Confidentialite from './components/Confidentialite';  
import Mentionlegal from './components/mentionlegal';

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
                        <Route path="/contact" element={<Contact />} /> 
                        <Route path="/confidentialite" element={<Confidentialite />} /> 
                        <Route path="/mentions-legales" element={<Mentionlegal />} /> 
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
