import React from 'react';
import './App.css';
import MarsWeather from './Components/MarsWeather';
import NasaPicture from './Components/NasaPIcture';
import NearEarthObject from './Components/NearEarthObject';
import Navbar from './Components/Navbar';
import Image from './Components/Image';
import Home from './Components/Home';
import MapAsteroids from './Components/MapAsteroids';
import { Switch,Route } from 'react-router-dom';


function App (){

return (
   <div>
    
    <Navbar />
    <Switch>
     
    <Route path="/objects"> <NearEarthObject /></Route>
    <Route path="/nasa-picture"> <NasaPicture /></Route>
    <Route path="/mars-weather"><MarsWeather /></Route>
    <Route path="/mars-photos"><Image /></Route>
    <Route path="/map-asteroids"><MapAsteroids /></Route>
    <Route path="/"><Home /></Route>
    </Switch>
    </div>
)
}



export default App;
