import React, {useEffect, useState} from 'react'
import axios from 'axios'

function CityItem({city}) {
  const [weatherDetails, setWeatherDetails] = useState()

  useEffect(() => {
    const cityName = city.cityName
    axios.get(`http://api.weatherapi.com/v1/current.json?key=84aaa11e3de44a23b7a162901220707&q=${cityName}&aqi=no`, {
      mode: 'no-cors'
    }).then(res =>setWeatherDetails(res.data))
   
  }, [])

  return (
    <div className='city'>
      <h2>{city.cityName}</h2>
      <div className='weather-details'>
        <span>{`${weatherDetails?.current?.temp_c}°`}</span>
        <span>{weatherDetails?.current?.condition?.text}</span>
      </div>
    </div>
  )
}

export default CityItem