import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import Figure from 'react-bootstrap/Figure';

export default function ModalMovie({ movie, show, handleClose }) {
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
            </Modal.Body>
            <Modal.Footer>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Add your comment"
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                        Submit
                    </Button>
                </InputGroup>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}