import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { editmovie } from "../redux/Action";

function Editmovie({ movie }) {
  const [show, setShow] = useState(false);
  const [title, settitle] = useState(movie.title);
  const [description, setdescription] = useState(movie.description);
  const [posterURL, setposterURL] = useState(movie.posterURL);
  const [rating, setrating] = useState(movie.rating);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const edit = () => {
    dispatch(
      editmovie({ title, description, posterURL, rating, id: movie.id},movie.id)
    );
    handleClose();
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>title</Form.Label>
              <Form.Control
                onChange={(event) => settitle(event.target.value)}
                type="text"
                autoFocus
                defaultValue={movie.title}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>description</Form.Label>
              <Form.Control
                onChange={(event) => setdescription(event.target.value)}
                type="text"
                autoFocus
                defaultValue={movie.description}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>posterURL </Form.Label>
              <Form.Control
                onChange={(event) => setposterURL(event.target.value)}
                type="text"
                autoFocus
                defaultValue={movie.posterURL}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>rating </Form.Label>
              <Form.Control
                onChange={(event) => setrating(event.target.value)}
                type="number"
                autoFocus
                defaultValue={movie.rating}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={edit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Editmovie;
