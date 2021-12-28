import React, {useState, useEffect} from 'react';
import { List } from './components/List';
import { Header } from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Search } from './components/Search';
import { Favorite } from './components/Favorite';

function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('');

   const getMovie = async (search) =>{
     const url = `http://www.omdbapi.com/?s=${search}&apikey=f08b1e07`
     const response = await fetch(url);
		 const responseJson = await response.json();
     console.log(responseJson)

     if (responseJson.Search) {
       setMovies(responseJson.Search)
     }

		
  }

    useEffect(() => {
      getMovie(search);
    }, [search])
   
  return (
    
     <div className='container'>
       <div className='row d-flex align-items-center mt-4 mb-4'>
         <Header heading="Movies" />
         <Search search={search} setSearch={setSearch} />
         </div>
     <div className='row'>
         <List movies={movies} favorites={Favorite} />
     </div>
     </div>   

  );
}

export default App;
