import React from 'react'
import '../CSS/nmovie.css'
import {useStateValue} from '../StateProvider'

function NominatedMovie({id,img,title,year}) {
    const[{nominations},dispatch] = useStateValue()
    console.log(id)
    const remove = () => {
        dispatch({
            type:'REMOVE',
            id:id
           
        })
        console.log('item dispatch is ' +id)
    }

    return (
 
        <div className='card'>
            <img className='poster'src={img} alt=""/>
            <h3>{title}</h3>
            <h4>Released {year}</h4>
            <button className='rembtn' onClick={remove}>Remove</button>
        </div>
      
    )
}

export default NominatedMovie
