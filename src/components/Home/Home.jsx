import { useState, useEffect } from "react"
import MovieList from "../MovieList/MovieList";
import './Home.css'
export default function Home() {

    const [movies, setMovies] = useState([]);

    async function getData() {
        let res = await fetch(`${process.env.REACT_APP_SERVER}/trending`);
        let data = await res.json();

        setMovies(data);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <MovieList movies={movies} />   
        </>
    )
};

