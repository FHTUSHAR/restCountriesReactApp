import React, { useEffect, useState } from 'react';
import Country from './Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>Visited All Countries In The World !</h1>
            <p>Total countries : {countries.length}</p>
            {
                countries.map(country => <Country country={country}> </Country>)
            }
            {/* name={country.name}
                    population={country.population}
                    area={country.area}
                    flag={country.flag} */}

        </div>
    );
};



export default Countries;

