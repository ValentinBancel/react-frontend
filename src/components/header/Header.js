// src/components/Header.js
import React from 'react';
import './Header.css'; // Importer le fichier CSS pour le style

function Header({ title, festivalPage, programPage, ticketPage }) {
    return (
        <header className="header">
            <div className="header-left">
                <h1>{title}</h1>
            </div>
            <nav className="header-right">
                <ul>
                    <li><a href={festivalPage}>Festival</a></li>
                    <li><a href={programPage}>Programme</a></li>
                    <li><a href="https://tickets.paris2024.org/">Billetterie</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
