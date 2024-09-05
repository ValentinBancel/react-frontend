// src/components/Header.js
import React from 'react';

function Header({ title, festivalPage, programPage, ticketPage }) {
    return (
        <header className="flex justify-between items-center p-5 bg-black text-white">
            <div className="header-left">
                <h1 className="m-0">{title}</h1>
            </div>
            <nav className="header-right">
                <ul className="flex list-none m-0 p-0 gap-4">
                    <li>
                        <a
                            className="text-white no-underline hover:underline"
                            href={festivalPage}
                        >
                            Festival
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-white no-underline hover:underline"
                            href={programPage}
                        >
                            Programme
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-white no-underline hover:underline"
                            href="https://tickets.paris2024.org/"
                        >
                            Billetterie
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
