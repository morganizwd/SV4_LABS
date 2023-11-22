import React, { useState, useEffect } from 'react';
import CertificationServiceCard from '../Card/CertificationServiceCard';
import AddCardButton from '../AddCardButton/AddCardButton';
import CardForm from '../CardForm/CardForm';
import RemoveButton from '../RemoveButton/RemoveButton'; // Убедитесь, что компонент импортирован
import './style.css';

function CertificationServicesPage() {
    const [services, setServices] = useState([]);
    const [selectedIds, setSelectedIds] = useState(new Set()); // Для отслеживания выбранных карточек
    const [isFormOpen, setIsFormOpen] = useState(false);

    useEffect(() => {
        fetch('/data/certification-services.json')
            .then(response => response.json())
            .then(data => setServices(data))
            .catch(error => console.error("Ошибка при загрузке сервисов:", error));
    }, []);

    const addService = (service) => {
        setServices(prevServices => [...prevServices, { ...service, id: Date.now() }]);
        setIsFormOpen(false);
    };

    const handleAddClick = () => {
        setIsFormOpen(true);
    };

    const toggleSelect = (id) => {
        setSelectedIds(prevSelectedIds => {
            const newSelectedIds = new Set(prevSelectedIds);
            if (newSelectedIds.has(id)) {
                newSelectedIds.delete(id);
            } else {
                newSelectedIds.add(id);
            }
            return newSelectedIds;
        });
    };

    const removeSelectedServices = () => {
        setServices(services.filter(service => !selectedIds.has(service.id)));
        setSelectedIds(new Set()); // Очистить выбранные ID после удаления
    };

    return ( 
        <div className="services-container">
            <div className='button-container'>
                <AddCardButton onAddClick={handleAddClick} />
                {isFormOpen && <CardForm onSave={addService} />}
                <RemoveButton onRemoveClick={removeSelectedServices} />
            </div>
            {services.map(service => (
                <CertificationServiceCard 
                    key={service.id} 
                    service={service} 
                    isSelected={selectedIds.has(service.id)}
                    toggleSelect={toggleSelect} 
                />
            ))}
        </div>
    );
}

export default CertificationServicesPage; 