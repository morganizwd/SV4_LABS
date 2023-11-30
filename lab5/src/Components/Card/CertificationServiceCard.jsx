import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';
import Popout from '../PopoutWindow/Popout';

function CertificationServiceCard({ service, isSelected, toggleSelect }) {
    const [isPopoutOpen, setIsPopoutOpen] = useState(false);

    const handleCardClick = () => {
        if (!isPopoutOpen) {
            toggleSelect(service.id);
        }
    };

    const togglePopout = (e) => {
        e.stopPropagation();
        setIsPopoutOpen(!isPopoutOpen);
    };

    const cardStyle = {
        maxWidth: 345, // Ширина карточки
        height: '100%', // Высота карточки
        margin: 'auto',
        border: isSelected ? '2px solid blue' : 'none',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
    };

    const cardMediaStyle = {
        height: 140, // Высота изображения в карточке
    };

    return (
        <>
            <Card 
                onClick={handleCardClick}
                style={cardStyle}
            >
                <CardMedia
                    component="img"
                    style={cardMediaStyle}
                    image={service.image}
                    alt={service.name}
                />
                <CardContent style={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {service.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {service.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={togglePopout}>Подробнее</Button>
                </CardActions>
            </Card>
            {isPopoutOpen && <Popout service={service} closePopout={togglePopout} />}
        </>
    );
}

export default CertificationServiceCard;