import './style.css';

function Footer() {
    return (
        <footer className="footer">
            <p>Свяжитесь с нами:</p>
            <p>Email: <a href="mailto:morganizwd@gmail.com">morganizwd@gmail.com</a></p>
            <p>Телефон: <a href="tel:+375336146223">+375336146223</a></p>
            <p>© {new Date().getFullYear()} Все под контролем. Все права защищены.</p>
        </footer>
    );
}

export default Footer;