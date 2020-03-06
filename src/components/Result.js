import React from 'react'

export default function Result(props) {

   const { city, date, sunrise, sunset, temp, pressure, wind, error } = props.weather
    return (
        <React.Fragment>
        <div>
            Weather in {city}
        </div>
        <div>  Temperature: {temp}</div>
        </React.Fragment>
    )
}
