import React from 'react'

export default function Result(props) {

   const { city, date, sunrise, sunset, temp, pressure, wind, error } = props.weather

   let content =  null 
   if(!error && city) {

    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()

    content = (
        <div>
       <h3>Result for {city}</h3>
           <h4>Results for date and time: {date}</h4>
           <h4>Current temperature: {temp} &#176;C </h4>
           <h4>Sunrise: {sunriseTime} </h4>
           <h4>Sunset: {sunsetTime} </h4>
           <h4>Current wind speed: {wind} m/s </h4>
           <h4>Current pressure: {pressure} hPa </h4>
        </div>
    )
   }

    return (
   <div className="result">
       {error ? `City ${city} does not exist in our database` : content}
   </div>
    )
}
