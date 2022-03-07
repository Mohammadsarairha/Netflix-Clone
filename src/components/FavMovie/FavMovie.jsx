import { Card, Button } from "react-bootstrap";
import swal from "sweetalert";

export default function FavRecipe({ movie, getFavMovies }) {
    function handelDelete(id) {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                swal("Poof! Your imaginary file has been deleted!", {
                    icon: "success",
                });
                const url = `${process.env.REACT_APP_SERVER}/DELETE/${id}`;

                // eslint-disable-next-line no-unused-vars
                const response = fetch(url, {
                    method: "DELETE", // *GET, POST, PUT, DELETE, etc
                }).then(() => {
                    getFavMovies();
                });
            } else {
                swal("Your imaginary file is safe!");
            }
        });
    }

    return (
        <Card key={movie.id} style={{ width: '25rem', overflowY: "scroll", height: '40rem' }}>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} style={{ width: '100%', height: '25rem' }} />
            <Card.Body>
                <Card.Title>{`${movie.title}`}</Card.Title>
                <Card.Text>
                    {`${movie.overview}`}
                </Card.Text>
                <Card.Text>
                    {`Your comment : ${movie.comment}`}
                </Card.Text>
                <Button variant="danger" onClick={() => handelDelete(movie.id)}>Delete</Button>
            </Card.Body>
        </Card>
    )
}