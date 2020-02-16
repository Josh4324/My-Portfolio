import React from 'react';
import Card from '../components/Card';

const React1 = (props) => {
    return (
        <div>
            <div className="grid-container">
                <div className="grid-item"><Card title='REACT1' /></div>
                <div className="grid-item"><Card title='REACT2' /></div>
                <div className="grid-item"><Card title='REACT3' /></div>
            </div>
        </div>
    );
}

export default React1;
