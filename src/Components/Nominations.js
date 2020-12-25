import React from 'react'
import {useStateValue} from '../StateProvider'
import NominatedMovie from '../Components/NominatedMovie'
import '../CSS/nominations.css'

function Nominations() {
    const[{nominations},dispatch] = useStateValue()

    return (
        <div className='nominations'>
           {nominations.map(item=>(
               <NominatedMovie id={item.id} title={item.title} img={item.image} year={item.year}/>
           ))}
        </div>
    )
}

export default Nominations
