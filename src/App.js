import React from 'react';
import './App.css';
import MarsWeather from './Components/MarsWeather';
import NasaPicture from './Components/NasaPIcture';
import NearEarthObject from './Components/NearEarthObject';
import Navbar from './Components/Navbar';
import Image from './Components/Image';
// import './Components/MarsWeather.css'
// import './Components/NasaPIcture.css'

function App (){

return (
  <div>
    <Navbar />
    <NearEarthObject />
    <NasaPicture />
    <Image />
    
    <MarsWeather />
  </div>
)
}



export default App;
