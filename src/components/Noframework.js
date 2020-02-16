import React from 'react';
import Card from '../components/Card';

const Noframework = () => {
    return (
        <div>
            <div className="grid-container">
                <div className="grid-item"><Card img='solar.png' title='Solar Calculator App' 
                link='https://hngi.github.io/Poseidon-Solar-Calculator/' alt='Solar Calculator'
                gitlink="https://github.com/hngi/Poseidon-Solar-Calculator"
                content="This web app calculates solar power needed to power an household. 
                Built by Me and my team mates at HNGI6" /></div>
                <div className="grid-item"><Card title='CSS' /></div>
                <div className="grid-item"><Card title='JAVASCRIPT' /></div>
            </div>
        </div>
    );
}

export default Noframework;
