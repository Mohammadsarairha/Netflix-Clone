import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import ModalMovie from '../ModalMovie/ModalMovie';

export default function Movie({ movie }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <>
        <Card key={movie.id} style={{ width: '25rem' , overflowY: "scroll", height:'40rem'}}>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} style={{ width: '100%' ,height:'25rem' }}/>
            <Card.Body>
                <Card.Title>{`${movie.title}`}</Card.Title>
                <Card.Text>
                    {`${movie.overview}`}
                </Card.Text>
                <Button variant="primary" onClick={handleShow}>Add to favorite</Button>
            </Card.Body>
        </Card>
        <ModalMovie movie={movie} show={show} handleClose={handleClose}/>
        </>
    )
}