import React, { useState, useEffect } from 'react';
import CertificationServiceCard from '../Card/CertificationServiceCard';

function CertificationServicesPage() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/data/certification-services.json')
            .then(response => response.json())
            .then(data => setServices(data))
            .catch(error => console.error("Ошибка при загрузке сервисов:", error));
    }, []);

    return (
        <div className="services-container">
            {services.map(service => (
                <CertificationServiceCard key={service.id} service={service} />
            ))}
        </div>
    );
}

export default CertificationServicesPage;