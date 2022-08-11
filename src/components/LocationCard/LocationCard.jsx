import React from 'react'
import './locationCard.scss'
import {Link} from 'react-router-dom'

const LocationCard = ({locationData}) => {
  return (
    <Link to ={`/area/${locationData.locationName}`} style={{textDecoration:'none',color:'#000'}}>
      <div className='locationCard'>
          <div className="locationCard__container">
              <h2 className="location__name">{locationData.locationName}</h2>
          </div>
      </div>
    </Link>
  )
}

export default LocationCard
