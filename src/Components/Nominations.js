import React from 'react'
import {useStateValue} from '../StateProvider'
import NominatedMovie from '../Components/NominatedMovie'
import '../CSS/nominations.css'

function Nominations() {
    const[{nominations},dispatch] = useStateValue()

    return (
        <>
        <h2 className='nom-heading'>NOMINATIONS</h2>
        <div className='nominations'>
           {nominations.length===0?<small>You haven't nominated any movies yet</small>:
           nominations.map(item=>(
            <NominatedMovie id={item.id} title={item.title} img={item.image} year={item.year}/>
        ))}
        
        </div>
        </>
    )
}

export default Nominations
