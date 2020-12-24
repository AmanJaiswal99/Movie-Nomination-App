import React,{useState} from 'react'
import '../CSS/movie.css'



function Movie({img,title,year}) {

    const[arr,setArr] = useState([])

    async function push() {
       await setArr([...arr,{image:img,Title:title,Year:year}])
       console.log(arr)
    }
    return (
        <div className='card'>
            <img className='poster'src={img} alt=""/>
            <h3>{title}</h3>
            <h4>Released {year}</h4>
            <button onClick={push}>Nominate</button>
        </div>
    )
}

export default Movie
