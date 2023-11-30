import React from 'react';
import { Container, Typography, Link } from '@mui/material';

function Footer() {
    return (
        <Container component="footer" style={{ padding: '20px 0', textAlign: 'center' }}>
            <Typography variant="body1">Свяжитесь с нами:</Typography>
            <Typography variant="body1">
                Email: <Link href="mailto:morganizwd@gmail.com">morganizwd@gmail.com</Link>
            </Typography>
            <Typography variant="body1">
                Телефон: <Link href="tel:+375336146223">+375336146223</Link>
            </Typography>
            <Typography variant="body1" style={{ marginTop: '15px' }}>
                © {new Date().getFullYear()} Все под контролем. Все права защищены.
            </Typography>
        </Container>
    );
}

export default Footer;
