import React from 'react'
import '../CSS/movie.css'
import {useStateValue} from '../StateProvider'



function Movie({id,img,title,year}) {

   const[{nominations},dispatch] = useStateValue()
   console.log(nominations)
   const nominateit = () => {
        dispatch({
            type: 'ADD',
            item:{
                id:id,
                title:title,
                image:img,
                year:year,
            },
        })
   }


    return (
        <div className='card'>
            <img className='poster'src={img} alt=""/>
            <h3>{title}</h3>
            <h4>Released {year}</h4>
            <button className='nombtn' onClick={nominateit}>Nominate</button>
        </div>
    )
}

export default Movie
