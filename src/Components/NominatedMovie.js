import React from 'react'
import '../CSS/nmovie.css'

function NominatedMovie({id,img,title,year}) {
    return (
 
        <div className='card'>
            <img className='poster'src={img} alt=""/>
            <h3>{title}</h3>
            <h4>Released {year}</h4>
            <button className='nombtn'>Remove</button>
        </div>
      
    )
}

export default NominatedMovie
