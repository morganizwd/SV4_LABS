import React, { useState, useEffect } from 'react';
import './style.css';

function CardForm({ onSave, existingService, isEditing, isFormOpen, setIsFormOpen }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [features, setFeatures] = useState(['']);

    useEffect(() => {
        if (isEditing && existingService) {
            setName(existingService.name);
            setDescription(existingService.description);
            setImage(existingService.image);
            setFeatures(existingService.features || ['']);
        }
    }, [isEditing, existingService]);

    const handleClose = () => {
        setIsFormOpen(false);
    };
    
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setImage(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleFeatureChange = (index, value) => {
        const updatedFeatures = [...features];
        updatedFeatures[index] = value;
        setFeatures(updatedFeatures);
    };

    const addFeature = () => {
        setFeatures([...features, '']);
    };

    const removeFeature = (index) => {
        setFeatures(features.filter((_, i) => i !== index));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSave({
            name,
            description,
            image,
            features: features.filter(f => f)
        }, existingService ? existingService.id : null);

        if (!isEditing) {
            setName('');
            setDescription('');
            setImage('');
            setFeatures(['']);
        }
    };

    return (
        <>
            {isFormOpen && (
                <form onSubmit={handleSubmit} className="card-form">
                    <button onClick={handleClose}>×</button>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Название услуги"
                        required
                    />
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Описание"
                        required
                    />
                    <input
                        type="file"
                        onChange={handleImageChange}
                    />
                    <div className="features">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-input">
                                <input
                                    type="text"
                                    value={feature}
                                    onChange={(e) => handleFeatureChange(index, e.target.value)}
                                    placeholder={`Особенность ${index + 1}`}
                                    required={features.length === 1}
                                />
                                {features.length > 1 && (
                                    <button type="button" onClick={() => removeFeature(index)}>
                                        Удалить
                                    </button>
                                )}
                            </div>
                        ))}
                        <button type="button" onClick={addFeature}>
                            Добавить особенность
                        </button>
                    </div>
                    <button type="submit">{isEditing ? 'Обновить' : 'Добавить'} карточку</button>
                </form>
            )}
        </>
    );
}

export default CardForm;