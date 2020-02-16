import React from 'react';
import  Card from '../components/Card';

const All = () => {
    return (
        <div>
            <div className="grid-container">
                <div className="grid-item"><Card title='ANGULAR' /></div>
                <div className="grid-item"><Card title='REACT' /></div>
                <div className="grid-item"><Card title='PYTHON' /></div>
            </div>
        </div>
    );
}

export default All;
