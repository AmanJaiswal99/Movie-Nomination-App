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
       const disabling = document.getElementById(id)
       disabling.setAttribute('disabled','disabled')
       disabling.textContent ='Nominated'
       disabling.style.backgroundColor='green'
   }


    return (
        <div className='card'>
            <img className='poster'src={img} alt=""/>
            <h3>{title}</h3>
            <h4>Released {year}</h4>
            <button id={id} className='nombtn' onClick={nominateit}>Nominate</button>
        </div>
    )
}

export default Movie
