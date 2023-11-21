import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="header">
            <ul className='logo'>
                <li><strong>Все под контролем, брат</strong></li>
            </ul>
            <button className="hamburger" onClick={handleMenuToggle}>
                &#9776; {/* This is a common icon for hamburger menus */}
            </button>
            <ul className={`content ${isMenuOpen ? "active" : ""}`}>
                <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Главная</Link></li>
                <li><Link to="/certification-services" onClick={() => setIsMenuOpen(false)}>Продукция</Link></li>
                <li><Link to="/quality-control" onClick={() => setIsMenuOpen(false)}>Контроль качества</Link></li>
            </ul>
        </div>
    );
}

export default Header; 