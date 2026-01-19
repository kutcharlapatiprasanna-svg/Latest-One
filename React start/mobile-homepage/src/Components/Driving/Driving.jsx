import React from 'react';
import './Driving.css';
import familyWalker from '../../assets/family_walker.png';

const Driving = () => {
    return (
        <div>
            <div className='driving-walker'>
                <img src={familyWalker} alt="family walker"></img>
                <h1>Enhancing Quality of
                    Lifeis Our Driving
                    Force</h1>
                <p>Drive DeVilbiss Healthcare is a
                    leading manufacturer of durable
                    medical equipment carrying a
                    complete line of life-enhancing
                    products focused on innovation,
                    functionality, and value.</p>
                <button>Learn More</button>
            </div>

        </div>
    );
}

export default Driving;
