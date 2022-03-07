import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Figure from 'react-bootstrap/Figure';
import swal from 'sweetalert';

export default function ModalMovie({ movie, show, handleClose }) {

    function handelFormSubmit(e) {
        e.preventDefault();
        let comment = e.target.comment.value;
        // To send a POST request to save the movie in our database as favorite movie
        addToFavList(movie, comment);
    }

    async function addToFavList(movie, comment) {
        const url = `${process.env.REACT_APP_SERVER}/addMovie`
        // This should match the required data in the server
        const data = {
            title: movie.title,
            release_date: movie.release_date,
            poster_path: movie.poster_path,
            overview: movie.overview,
            comment: comment
        }
        // Use Fetch to send POST request
        // eslint-disable-next-line no-unused-vars
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        swal("Favorite Movie", "Thank you for Your comment", "success");
        handleClose();
    }


    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{movie.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Figure>
                    <Figure.Image
                        width={200}
                        height={180}
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    />
                </Figure>
                <Form onSubmit={handelFormSubmit} style={{ margin: "0 10px" }}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control name="comment" type="text" placeholder="Enter Comment" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}