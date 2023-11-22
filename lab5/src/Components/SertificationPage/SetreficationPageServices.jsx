import React, { useState, useEffect } from 'react';
import CertificationServiceCard from '../Card/CertificationServiceCard';
import AddCardButton from '../AddCardButton/AddCardButton';
import CardForm from '../CardForm/CardForm';

function CertificationServicesPage() {
    const [services, setServices] = useState([]);
    const [isFormOpen, setIsFormOpen] = useState(false);

    // Загрузка данных при инициализации компонента
    useEffect(() => {
        fetch('/data/certification-services.json')
            .then(response => response.json())
            .then(data => setServices(data))
            .catch(error => console.error("Ошибка при загрузке сервисов:", error));
    }, []);

    // Функция для добавления новой карточки
    const addService = (service) => {
        setServices(prevServices => [...prevServices, { ...service, id: Date.now() }]);
        setIsFormOpen(false); // Закрыть форму после добавления карточки
    };

    // Функция для открытия формы добавления карточки
    const handleAddClick = () => {
        setIsFormOpen(true);
    };

    return (
        <div className="services-container">
            <AddCardButton onAddClick={handleAddClick} />
            {services.map(service => (
                <CertificationServiceCard key={service.id} service={service} />
            ))}
            
            
            {isFormOpen && <CardForm onSave={addService} />}
        </div>
    );
}

export default CertificationServicesPage; 