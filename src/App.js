import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import './App.css';
import Movie from './Components/Movie'
import Navbar from './Components/Navbar'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Nomination from './Nomination'


function App() {


  const[movies,setMovies] = useState([])
  const[name,setName] = useState()
  const[result,setResult] = useState(false)

        useEffect(() => {
          if(name!==undefined){
            async function getdata(){
              const res = await Axios.get(`https://www.omdbapi.com/?apikey=9946a5a3&?&s=${name}&?t=${name}`)
                
                setMovies(res.data.Search)
                console.log(movies)
                setResult(true)
            }
            getdata()
          }
          
        }, [name])

        
     

      function show(){
  setName(document.getElementById('userInput').value)

        }

 return (
   <Router>
  <div className="app">
    <Navbar/>
    <Route exact path='/'>

    <div className="search">
        <input type="text" placeholder='Enter movie name' id="userInput" />
        <button id='btn' type='submit' onClick={show}>Click to search</button>
    </div>

    <div className="search-result">
       {result?movies.map(item=>(
        <Movie title={item.Title} img={item.Poster} year ={item.Year}/>
       )):<p>nothing to display</p>}
    </div>
    </Route>
    <Route path='/nominations'>
      <Nomination/>
    </Route>
  
  </div>
  </Router>

  );
}
export default App;
