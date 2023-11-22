import React, { useState } from 'react';
import './style.css';

function CardForm({ onSave }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [features, setFeatures] = useState(['']); // Начальное состояние для особенностей

    // Обработчик отправки формы
    const handleSubmit = (event) => {
        event.preventDefault();
        onSave({ name, description, image, features: features.filter(f => f) }); // Отфильтровываем пустые строки
        // Сброс состояний формы после сохранения
        setName('');
        setDescription('');
        setImage('');
        setFeatures(['']); // Сброс к одной пустой особенности
    };

    // Обработчик изменения изображения
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => setImage(reader.result);
        if (file) reader.readAsDataURL(file);
    };

    // Обработчик изменения полей особенностей
    const handleFeatureChange = (index, value) => {
        const updatedFeatures = [...features];
        updatedFeatures[index] = value;
        setFeatures(updatedFeatures);
    };

    // Добавить поле особенности
    const addFeature = () => {
        setFeatures([...features, '']);
    };

    // Удалить поле особенности
    const removeFeature = (index) => {
        setFeatures(features.filter((_, i) => i !== index));
    };

    return (
        <form onSubmit={handleSubmit} className="card-form">
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
                required
            />
            <div className="features">
                {features.map((feature, index) => (
                    <div key={index} className="feature-input">
                        <input
                            type="text"
                            value={feature}
                            onChange={(e) => handleFeatureChange(index, e.target.value)}
                            placeholder={`Особенность ${index + 1}`}
                            required={features.length === 1} // Только первая особенность обязательна
                        />
                        <button type="button" onClick={() => removeFeature(index)}>
                            Удалить
                        </button>
                    </div>
                ))}
                <button type="button" onClick={addFeature}>
                    Добавить особенность
                </button>
            </div>
            <button type="submit">Сохранить карточку</button>
        </form>
    );
}

export default CardForm;
