import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props)
    return (
        <div className='country'>
            <img className='flag' src={props.country.flag} alt="" />
            <h2> Name : {props.country.name}</h2>
            <h2>Capital : {props.country.capital ? props.country.capital : " No Capital Found"}</h2>
            <h2> Population : {props.country.population}</h2>
            <p>Area : {props.country.area}</p>
        </div>
    );
};

export default Country;