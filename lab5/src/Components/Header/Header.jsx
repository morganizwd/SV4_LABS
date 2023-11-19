import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <ul>
                <li><strong>Все под контролем, брат</strong></li>
            </ul>
            <ul>
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/certification-services">Продукция</Link></li>
                <li><Link to="/quality-control">Контроль качества</Link></li>
            </ul>
        </div>
    );
}

export default Header;