function Popout({ service, closePopout }) {
    return (
        <div className="popout-background" onClick={closePopout}>
            <div className="popout-window" onClick={e => e.stopPropagation()}>
                <button onClick={closePopout}>Закрыть</button>
                <ul className="service-features">
                    {service.features.map((feature, index) => (
                        <li key={index} className="feature">{feature}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
} 

export default Popout;