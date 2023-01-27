import React,{useState} from 'react'
//import {Link} from 'react-router-dom'
//import {FaBars, FaTimes}  from 'react-icons/fa'

function Navbar() {
    const [click, setClick] = useState(false)
    const handleClick =() => setClick(!click )


  return (
    <nav className="navbar bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand nav-item text-light" id="home-link">STELLAR SPACE</a>

                <ul className="navbar-nav me-auto d-flex flex-row">

                    <li className="nav-item me-2">
                        <a className="text-light nav-link" href="#" id="category-link">NASA-PICTURE</a>
                    </li>
                    
                    <li className="nav-item me-2">
                        <a className="text-light nav-link" href="#" id="countries-link">OBJECTS</a>
                    </li>

                    <li className='nav-item me-2'> 
                    <a className='text-light nav-link' href="#" id="">MARS-WEATHER</a>
                    </li>
                    <li className='nav-item me-2'> 
                    <a className='text-light nav-link' href="#" id="">MARS-PHOTOS</a>
                    </li>
                    <li className='nav-item me-2'> 
                    <a className='text-light nav-link' href="#" id="">MAP-ASTEROIDS</a>
                    </li>
                </ul>

                {/* <form class="d-flex" id="search-form">
                    <input class="form-control" type="text" placeholder="Search" id="search"/>
                    <button class="btn btn-outline-info ms-1" id="searchBtn">SEARCH</button>
                </form> */}
            </div>
        </nav>

        /* <ul className={click ?'nav-menu ative' : "nav-menu"}>
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

         {click ?(<FaTimes />):(<FaBars size={20} style={{color:'#fff'}} />)}
            
        </div> */

      

  )
  }

export default Navbar