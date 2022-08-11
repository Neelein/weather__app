import './App.css';
import { Routes ,Route } from 'react-router-dom';
import AreaInfo from './components/AreaInfo/AreaInfo';
import Home from './components/Home/Home';
import { useEffect, useState } from 'react'

function App() {
  const [weatherData ,setWeatherData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData (){
    try {
      const res = await fetch(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-063?Authorization=${process.env.REACT_APP_API_KEY}`)
      const data = await res.json()
      setWeatherData(data.records.locations[0].location)
    } catch (error) {
      console.log(error)
    }
  }

  return(
    <div className='app'>
      <Routes>
        <Route path='/' element = {<Home weatherData = {weatherData}/>}/>
        <Route path='/area/:id' element = {<AreaInfo/>}/>
      </Routes>
    </div>
  )
}

export default App;
