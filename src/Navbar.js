import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div className='navbar'>

            <Link to='/'><h1>Home</h1></Link>
           <Link to='/A'><h1>A</h1></Link> 
            <Link to='/B'><h1>B</h1></Link>
        </div>
    )
}

export default Navbar
