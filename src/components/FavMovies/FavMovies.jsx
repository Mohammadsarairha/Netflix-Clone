import { useState, useEffect } from "react";
import FavMovie from "../FavMovie/FavMovie";
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export default function FavMovies() {
    const [favMovies, setFavMovies] = useState([]);

    async function getFavMovies() {
        const response = await fetch(`${process.env.REACT_APP_SERVER}/getMovies`);
        const data = await response.json();

        setFavMovies(data);
    }

    useEffect(() => {
        getFavMovies();
    }, []);

    return (
        <>
            <Row xs={1} md={3} className="g-4">
                {favMovies && favMovies.map(movie => (
                    <Col key={movie.id}>
                        <FavMovie movie={movie} getFavMovies={getFavMovies} />
                    </Col>
                ))}
            </Row>
        </>
    );
}