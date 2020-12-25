import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbtn'>
            <Link to='/'><h2>HOME</h2></Link>
            </div>
           <div className='navbtn'>
           <Link to='/nominations'><h2>NOMINATIONS</h2></Link> 
           </div>
           
         
        </div>
    )
}

export default Navbar
