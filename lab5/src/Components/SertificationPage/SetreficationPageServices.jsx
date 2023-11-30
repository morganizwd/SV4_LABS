import React, { useState, useEffect } from 'react';
import CertificationServiceCard from '../Card/CertificationServiceCard';
import CardForm from '../CardForm/CardForm';
import { Container, Grid, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

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
        <Container maxWidth="lg">
            <Grid container spacing={2} style={{ marginBottom: '20px' }}>
                <Grid item>
                    <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleAddClick}>
                        Добавить
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="secondary" startIcon={<EditIcon />} onClick={handleEditClick} disabled={selectedIds.size !== 1}>
                        Редактировать
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="error" startIcon={<DeleteIcon />} onClick={removeSelectedServices}>
                        Удалить
                    </Button>
                </Grid>
            </Grid>
            {isFormOpen && (
                <CardForm 
                    onSave={addOrUpdateService} 
                    existingService={editingService} 
                    isFormOpen={isFormOpen} 
                    setIsFormOpen={setIsFormOpen}
                />
            )}
            <Grid container spacing={2}>
                {services.map(service => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={service.id}>
                        <CertificationServiceCard 
                            service={service} 
                            isSelected={selectedIds.has(service.id)}
                            toggleSelect={toggleSelect} 
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default CertificationServicesPage;