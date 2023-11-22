import React, { useState } from 'react';
import Popout from '../PopoutWindow/Popout';
import './style.css';

function CertificationServiceCard({ service, isSelected, toggleSelect }) {
    const [isPopoutOpen, setIsPopoutOpen] = useState(false);

    const handleCardClick = () => {
        if (!isPopoutOpen) {
            toggleSelect(service.id); // Вызов toggleSelect только если Popout не открыт
        }
    };

    const togglePopout = (e) => {
        e.stopPropagation(); // Предотвратить вызов handleCardClick при клике на карточку
        setIsPopoutOpen(!isPopoutOpen);
    };

    return (
        <>
            <div className={`service-card ${isSelected ? 'selected' : ''}`} onClick={handleCardClick}>
                <img src={service.image} alt={service.name} className="service-image" />
                <div className="service-content">
                    <h3 className="service-title">{service.name}</h3>
                    <p className="service-description">{service.description}</p> 
                    <button onClick={togglePopout}>Подробнее</button>
                </div>
            </div>
            {isPopoutOpen && <Popout service={service} closePopout={togglePopout} />}
        </>
    );
}

export default CertificationServiceCard;
