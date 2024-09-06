import React from 'react';

function Footer() {
    return (
        <footer className="flex justify-between items-center p-5 bg-black text-white">
            <div className="footer-left">
                <p className="m-0">© {new Date().getFullYear()} Ton Site. Tous droits réservés.</p>
            </div>
            <nav className="footer-right">
                <ul className="flex list-none m-0 p-0 gap-4">
                    <li>
                        <a
                            className="text-white no-underline hover:underline"
                            href="/mentions-legales"
                        >
                            Mentions légales
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-white no-underline hover:underline"
                            href="/confidentialite"
                        >
                            Politique de confidentialité
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-white no-underline hover:underline"
                            href="/contact"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;
