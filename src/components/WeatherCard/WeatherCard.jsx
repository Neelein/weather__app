import React from 'react'
import './weatherCard.scss'

const WeatherCard = ({areaData, day}) => {
  return (
    <div className='weatherCard'>
        <div className="weatherCard__container">
            <div className="weather-info">
                <span className='weather-type'>{areaData.weatherElement[6].time[day].elementValue[0].value}</span>
                <span className='temperature'>{areaData.weatherElement[1].time[day].elementValue[0].value}&deg;C</span>
            </div>
            <div className="time">
                <span>{areaData.weatherElement[1].time[day].endTime}</span>
            </div>
        </div>
    </div>
  )
}

export default WeatherCard
