import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

function HomePage() {
    return (
        <Container component={Paper} style={{ padding: '20px', marginTop: '20px' }}>
            <Typography variant="h3" gutterBottom>
                Добро пожаловать на наш сайт контроля качества!
            </Typography>
            <Typography variant="body1">
                Здесь вы можете узнать всю информацию о качестве продукции нашего предприятия.
            </Typography>
        </Container>
    );
}

export default HomePage;