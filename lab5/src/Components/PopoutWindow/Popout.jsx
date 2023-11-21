 import './style.css'

function Popout({ service, closePopout }) {
    return (
        <div className="popout-background" onClick={closePopout}>
            <div className="popout-window" onClick={e => e.stopPropagation()}>
                <button onClick={closePopout} aria-label="Close">&#10005;</button> 
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