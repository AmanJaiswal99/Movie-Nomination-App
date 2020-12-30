import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import './App.css';
import Movie from './Components/Movie'
import Navbar from './Components/Navbar'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Nominations from './Components/Nominations';
import SearchIcon from '@material-ui/icons/Search';


function App() {


  const[movies,setMovies] = useState([])
  const[name,setName] = useState()
  const[result,setResult] = useState(false)
  const[loading,setLoading] = useState(false)
        useEffect(() => {
          if(name!==undefined&&name!==''){
            async function getdata(){
              const res = await Axios.get(`https://www.omdbapi.com/?apikey=9946a5a3&?&s=${name}&?t=${name}`)
                
                setMovies(res.data.Search)
                console.log(movies)
                
                  setResult(true)
                 
               
            }
            getdata()
          }
          else{
            setResult(false)
          }
          
        }, [name])

        
     

      function show(){
  setName(document.getElementById('userInput').value)
        setLoading(true)
        }

        const clear = () => {
          
          document.getElementById('userInput').value = ''
          show()
          setLoading(false)
        }

 return (
   <Router>
  <div className="app">
    <Navbar/>
    <Switch>
    <Route exact path='/'>

    <div className="search">
        <input type="text" placeholder='Enter movie name' id="userInput" />
        <button id='btn' className='searchbtn' type='submit' onClick={show}><SearchIcon/></button>
        
     {result? <button className='clearbtn' onClick={clear}>Clear X</button>:null}
    </div>
    
   
    <div className="search-result">
       {result?movies.map(item=>(
        <Movie id={item.imdbID} title={item.Title} img={item.Poster} year ={item.Year}/>
       )):<small>{loading?<p>loading...</p>:<p>Search something to display</p>}</small>}
    </div>
    </Route>
    <Route path='/nominations'>
      <Nominations/>
    </Route>
    </Switch>
  </div>
  </Router>

  );
}
export default App;
