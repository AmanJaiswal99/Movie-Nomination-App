import React from 'react'
import '../CSS/movie.css'
import {arr} from '../nominations'


function Movie({img,title,year}) {
    
   

    async function push() {
        arr.push([...arr,{image:img,Title:title,Year:year}])
      
    }
    return (
        <div className='card'>
            <img className='poster'src={img} alt=""/>
            <h3>{title}</h3>
            <h4>Released {year}</h4>
            <button onClick={push}>Click twice to nominate</button>
        </div>
    )
}

export default Movie
