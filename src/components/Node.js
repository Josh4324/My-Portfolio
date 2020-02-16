import React from 'react';
import Card from '../components/Card';

const Node = () => {
    return (
        <div>
            <div className="grid-container">
                <div className="grid-item"><Card title='NODE1' /></div>
                <div className="grid-item"><Card title='NODE2' /></div>
                <div className="grid-item"><Card title='NODE3' /></div>
            </div>
        </div>
    );
}

export default Node;
