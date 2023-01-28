import React from 'react'
 import {  Link } from 'react-router-dom'

function Navbar() {
    //const [click, setClick] = useState(false)
    //const handleClick =() => setClick(!click )


  return (
    <div>
    <nav className="navbar bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand nav-item text-light" id="home-link" to="/">{"Home"}</Link>

                <ul className="navbar-nav me-auto d-flex flex-row">

                    <li className="nav-item me-2">
                        <Link className="text-light nav-link" to="nasa-picture" id="pictureday-link">{"NasaPicture"}</Link>
                    </li>
                    
                    <li className="nav-item me-2">
                        <Link className="text-light nav-link" to="objects" id="objects-link">{"NearEarthObject"}</Link>
                    </li>

                    <li className='nav-item me-2'> 
                    <Link className='text-light nav-link' to="mars-weather" id="">{"MarsWeather"}</Link>
                    </li>
                    <li className='nav-item me-2'> 
                    <Link className='text-light nav-link' to="mars-photos" id="">{"Image"}</Link>
                    </li>
                    <li className='nav-item me-2'> 
                    <Link className='text-light nav-link' to="map-asteroids" id="">{"Map-Asteroids"}</Link>
                    </li>
                </ul>

                {/* <form class="d-flex" id="search-form">
                    <input class="form-control" type="text" placeholder="Search" id="search"/>
                    <button class="btn btn-outline-info ms-1" id="searchBtn">SEARCH</button>
                </form> */}
            </div>
        </nav>
        {/* <Routes>
            <Route path="/" ></Route>
            <Route path="/nasapicture" element={<NasaPicture />}></Route>
            <Route path="/objects" element={<NearEarthObject />}></Route>
            <Route path="/mars-weather" element={<MarsWeather />}></Route>
            <Route path="/mars-photos" element={<Image />}></Route>
           
        </Routes> */}

        {/* /* <ul className={click ?'nav-menu ative' : "nav-menu"}>
            <li>
                <Link to='/'>Home</Link>
            </li>

            <li>
                <Link to='/pricing'>pricing</Link>

            </li>
            <li>
                <Link to='/training'>training</Link>

            </li>
            <li>
                <Link to='/contacts'>contacts</Link>
            </li>
        </ul> */
        /* <div className='hamburger' onClick={handleClick}>

         {click ?(<FaTimes />):(<FaBars size={20} style={{color:'#fff'}} />)} */}
            
        </div> 
        

      

  )
  }

export default Navbar