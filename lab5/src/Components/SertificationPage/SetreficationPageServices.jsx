import React, { useState, useEffect } from 'react';
import CertificationServiceCard from '../Card/CertificationServiceCard';
import AddCardButton from '../AddCardButton/AddCardButton';
import CardForm from '../CardForm/CardForm';
import RemoveButton from '../RemoveButton/RemoveButton';
import EditButton from '../EditButton/EditButton';
import './style.css';

function CertificationServicesPage() {
    const [services, setServices] = useState([]);
    const [selectedIds, setSelectedIds] = useState(new Set());
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingService, setEditingService] = useState(null);

    useEffect(() => {
        fetch('/data/certification-services.json')
            .then(response => response.json())
            .then(data => setServices(data))
            .catch(error => console.error("Ошибка при загрузке сервисов:", error));
    }, []);

    const addOrUpdateService = (serviceData, id) => {
        if (id) {
            setServices(prevServices =>
                prevServices.map(service => service.id === id ? { ...service, ...serviceData } : service)
            );
        } else {
            setServices(prevServices => [...prevServices, { ...serviceData, id: Date.now() }]);
        }
        setIsFormOpen(false);
        setEditingService(null);
    };

    const handleAddClick = () => {
        setEditingService(null);
        setIsFormOpen(true);
    };

    const handleEditClick = () => {
        const selectedIdArray = Array.from(selectedIds);
        if (selectedIdArray.length === 1) {
            const serviceToEdit = services.find(service => service.id === selectedIdArray[0]);
            setEditingService(serviceToEdit);
            setIsFormOpen(true);
        } else {
            alert("Выберите одну карточку для редактирования");
        }
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
        setServices(prevServices => prevServices.filter(service => !selectedIds.has(service.id)));
        setSelectedIds(new Set());
    };

    return ( 
        <div className="services-container">
            <div className='button-container'>
                <AddCardButton onAddClick={handleAddClick} />
                <EditButton onEditClick={handleEditClick} isDisabled={selectedIds.size !== 1} />
                <RemoveButton onRemoveClick={removeSelectedServices} />
            </div>
            {isFormOpen && (
                <CardForm 
                    onSave={addOrUpdateService} 
                    existingService={editingService} 
                    isFormOpen={isFormOpen} 
                    setIsFormOpen={setIsFormOpen}
                />
            )}
            <div className='card-container'>
                {services.map(service => (
                    <CertificationServiceCard 
                        key={service.id} 
                        service={service} 
                        isSelected={selectedIds.has(service.id)}
                        toggleSelect={toggleSelect} 
                    />
                ))}
            </div>
        </div>
    );
}

export default CertificationServicesPage;