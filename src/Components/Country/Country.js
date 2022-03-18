import React from 'react';
import './Country.css';


const Country = (props) => {
    const {name, area, population, flags, region} = props.country;
    return (
        <div>
            <div className='country'>  
            <h3>{name.common}</h3>
            <p>Region:{region}</p>
            <img src={flags.png} alt=""/>
            <p>Area: {area}</p>
            <p>Population:{population}</p>
            </div>   
        </div>
    );
};

export default Country;