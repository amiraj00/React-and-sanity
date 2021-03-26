import React, {useState} from 'react';
import Movie from './Movie';
import {getMovies} from '../utils/movieService';

const Movies = () => {
    const [data, setData] = useState([])

    const handleClick = async () =>{
        const movie = await getMovies();
        console.log(movie)
        setData(movie)
    }
    return (
        <section>
            <button type="button" onClick={handleClick}>Klikk meg</button>
            {data?.length > 0 ? data.map(movie => <Movie title={movie.title} actor={movie.actor} />) : <p>Ingen filmer</p>}
            </section>

    )
    

}

export default Movies