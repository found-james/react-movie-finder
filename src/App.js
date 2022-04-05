import { useState } from 'react';
import { FaGithub } from "react-icons/fa";
import Form from './components/Form.js'
import MovieDisplay from './components/MovieDisplay.js';

export default function App (){

    const apiKey='d1d01b90';
    const[ movie, setMovie ] = useState(null);
    
    const getMovie = async (searchTerm) => {
        try {
            const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`);
            const data = await response.json();
            setMovie(data);
        } 
        catch (error) {
            console.error(error);
        }
    }
    

    return (
        <>
            <Form movieSearch={getMovie}/>
            <MovieDisplay movie={movie} />
            <footer>
                <a href="https://github.com/jayworks2318"><FaGithub /></a>
            </footer>
        </>
    ) 
}