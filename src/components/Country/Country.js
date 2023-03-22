import React from 'react';
import "./Country.css"

const Country = (props) => {
    console.log(props.country)
    const {name, area, population, region, flags} = props.country
    return (
        <div className='country'>
            <img src={flags.png} alt={flags.alt} />
            <h2>Name: {name.common}</h2>
            <p>Area: {area}</p>
            <p>Population: {population}</p>
            <p>Region: <small>{region}</small></p>
        </div>
    )
}

export default Country;