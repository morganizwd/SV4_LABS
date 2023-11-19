function CertificationServiceCard({ service }) {
    return (
        <div className="service-card">
            <img src={service.image} alt={service.name} className="service-image" />
            <div className="service-content">
                <h3 className="service-title">{service.name}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                    {service.features.map((feature, index) => (
                        <li key={index} className="feature">{feature}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default CertificationServiceCard;