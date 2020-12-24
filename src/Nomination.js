import React,{useState,useEffect} from 'react'
import {arr} from './nominations'

function Nomination() {

    const[all,setAll] = useState([])
  
    useEffect(() => {
        async function set(){
            await setAll(arr)
        }
       set()
    }, [])
    return (
        <div>
            <h3>Nominated Movies Are</h3>
            {all.map(item=>(
                <h4>{item.Title}</h4>
            ))}
        </div>
    )
}

export default Nomination


