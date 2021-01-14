import React,{useEffect} from 'react'
import {useStateValue} from '../StateProvider'
import NominatedMovie from '../Components/NominatedMovie'
import '../CSS/nominations.css'

function Nominations() {
    const[{nominations},dispatch] = useStateValue()
    useEffect(() => {
        if(nominations.length>5){
            setTimeout(function(){alert("Please do not nominate more than 5 movies")},500)
        }
    }, [])

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
