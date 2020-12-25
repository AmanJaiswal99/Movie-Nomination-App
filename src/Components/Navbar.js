import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div className='navbar'>

        
            
        <div className='navbtns'>
            <div className='navbtn'>
            <Link to='/'><h3>HOME</h3></Link>
            </div>
           <div className='navbtn'>
           <Link to='/nominations'><h3>NOMINATIONS</h3></Link> 
           </div>
            
        </div>
           
           
         
        </div>
    )
}

export default Navbar
