import React from 'react'
import './card.styles.css'

export const Card =(props)=>(
    <div className='card-container'>
        <h1>{props.airline.name}</h1>
        <h1>iata code: {props.airline.iata_code}</h1>
        <h1>icao code: {props.airline.icao_code}</h1>
    </div>
)