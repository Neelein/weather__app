import React from 'react'
import LocationCard from '../LocationCard/LocationCard'
import './home.scss'

const Home = ({weatherData}) => {
    return (
        <div className='home'>
            <div className="title">
                <h1>天龍國天氣預報</h1>
            </div>
            <div className='home__container'>
                {weatherData.map(locationData => (
                    <LocationCard locationData = {locationData} key = {locationData.geocode}/>
                ))}
            </div>
      </div>
    )
}

export default Home
