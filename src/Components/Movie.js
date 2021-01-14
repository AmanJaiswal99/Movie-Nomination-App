import React,{useState,useEffect} from 'react'
import '../CSS/movie.css'
import {useStateValue} from '../StateProvider'

function Movie({id,img,title,year}) {

   const[{nominations},dispatch] = useStateValue()

   
    
  console.log(nominations)
   const nominateit = () => {
       if(nominations.length<5){
        dispatch({
            type: 'ADD',
            item:{
                id:id,
                title:title,
                image:img,
                year:year,
            },
        })
        
        var disabling = document.getElementById(id)
        disabling.setAttribute('disabled','disabled')
        disabling.textContent ='Nominated'
        disabling.style.backgroundColor='green'  
       }
       

        else{
            setTimeout(function(){alert("You can only have 5 nominations")},500)
        }
        
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
