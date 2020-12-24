import React,{useState} from 'react'
import Axios from 'axios'
import './App.css';
import Movie from './Components/Movie'
import Navbar from './Components/Navbar'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Nomination from './Nomination'


function App() {

  const[data,setData] = useState()
  const[name,setName] = useState('undefined')
  const[input,setInput] = useState()
  const[title,setTitle] = useState()
  const[year,setYear] = useState()
  const[poster,setPoster] = useState()
  const[result,setResult] = useState(false)



  async function run() {
    
    await setName(input)
 
    getMovies()
    setResult(true)
 
  }

  
  async function getMovies(){
    const res = await Axios.get(`https://www.omdbapi.com/?apikey=9946a5a3&?&t=` + name+'?')
    
    console.log(res)
    await setData(res.data)
    await setTitle(data.Title)
    await setYear(data.Year)
    await setPoster(data.Poster)
    
    
   
}

async function inserting(e){
  await setInput(e.target.value)
}

 return (
   <Router>
  <div className="app">
    <Navbar/>
    <Route exact path='/'>
    <div className="search">
  
      <input id='searchbar'type="text" placeholder='Enter movie name'onChange={inserting}/>
      <button id='btn' type='submit'onClick={run}>Search</button>

    </div>

    <div className="search-result">
        {result?<Movie img={poster} title={title}year={year}/>:<p>Nothing to display</p>}
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
