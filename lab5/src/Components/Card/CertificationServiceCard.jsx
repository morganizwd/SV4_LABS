import React, { useState } from 'react';
import Popout from '../PopoutWindow/Popout';

function CertificationServiceCard({ service }) {
    const [isPopoutOpen, setIsPopoutOpen] = useState(false);

    const togglePopout = () => {
        setIsPopoutOpen(!isPopoutOpen);
    };

    return (
        <>
            <div className="service-card" onClick={togglePopout}>
                <img src={service.image} alt={service.name} className="service-image" />
                <div className="service-content">
                    <h3 className="service-title">{service.name}</h3>
                    <p className="service-description">{service.description}</p> 
                </div>
            </div>
            {isPopoutOpen && <Popout service={service} closePopout={togglePopout} />}
        </>
    );
}

export default CertificationServiceCard;
