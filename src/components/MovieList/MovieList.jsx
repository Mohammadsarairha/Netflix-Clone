import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Movie from '../Movie/Movie';

export default function MovieList({ movies }) {
    return (
        <Row xs={1} md={3} className="g-4">
        {movies.map(movie => (
            <Col key={movie.id}>
                <Movie movie={ movie }/>
            </Col>
        ))}
    </Row>
    )
}
