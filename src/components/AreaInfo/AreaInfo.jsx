import React from 'react'
import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import WeatherCard from '../WeatherCard/WeatherCard'

import './areaInfo.scss'

const mapWeek = [2,4,6,8,10,12]

const AreaInfo = () => {
  const {id} = useParams()
  const [areaData, setAreaData] = useState({})
  const [isloading, setIsloading] = useState(true)

  useEffect(() => {
    fetchData()
  },[])

 const fetchData = async () => {
    try {
      const res = await fetch(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-063?Authorization=${process.env.REACT_APP_API_KEY}&locationName=${id}`)
      const data = await res.json()
      setAreaData(data.records.locations[0].location[0])
      setIsloading(false)
    } catch (error) {
      console.log(error)
    }
  }

  if(isloading){
    return(
      <h1>isLoading......</h1>
    )
  }

  return (
    <div className='areaInfo'>
      <div className="areaInfo__container">
        <div className="dayInfo">
          <div className="temperature">
            <span>{areaData.weatherElement[1].time[0].elementValue[0].value}&deg;C</span>
            <span className="weather-type">{areaData.weatherElement[6].time[0].elementValue[0].value}</span>
          </div>
          <div className="areaName">
            <h1>
              {areaData.locationName}
            </h1>
          </div>
          <div className="desc">
            <p>{areaData.weatherElement[10].time[0].elementValue[0].value}</p>
          </div>
          <div className="time">
            {areaData.weatherElement[1].time[0].startTime} - {areaData.weatherElement[1].time[0].endTime}
          </div>
        </div>
        <div className="weekInfo">
          {mapWeek.map(day => (
            <WeatherCard areaData = {areaData} day = {day} key = {day}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AreaInfo
