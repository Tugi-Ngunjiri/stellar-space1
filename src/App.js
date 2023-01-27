import React from 'react';
import './App.css';
import MarsWeather from './Components/MarsWeather';
import NasaPicture from './Components/NasaPIcture';
import NearEarthObject from './Components/NearEarthObject';
import './Components/MarsWeather.css'
import './Components/NasaPIcture.css'

function App (){

return (
  <div>
    <NearEarthObject />
    <NasaPicture />
    <MarsWeather />
  </div>
)
}



export default App;
