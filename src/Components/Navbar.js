import React from 'react'
import {Link} from 'react-router-dom'
import {useStateValue} from '../StateProvider'
import HomeIcon from '@material-ui/icons/Home';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

function Navbar() {
    const[{nominations},dispatch] = useStateValue()


    return (
        <div className='navbar'>

        
            
        <div className='navbtns'>
            <div className='navbtn'>
            <Link to='/'>
            <HomeIcon/><h3>HOME</h3></Link>
            </div>
           <div className='navbtn'>
           <Link to='/nominations'>
               <CheckBoxIcon/><h3>NOMINATIONS: {nominations.length}</h3></Link> 
           </div>
            
        </div>
           
           
         
        </div>
    )
}

export default Navbar
