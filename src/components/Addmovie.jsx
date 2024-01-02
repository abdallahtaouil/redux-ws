import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addmovie } from '../redux/Action';


function Addmovie() {
  const [show, setShow] = useState(false);
const [title,settitle]=useState('')
const [description,setdescription]=useState('')
const [posterURL,setposterURL]=useState('')
const [rating,setrating]=useState(0)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const movies=useSelector(state=>state.movies)
  const dispatch=useDispatch()
const  add=()=>{
dispatch(addmovie({title,description,posterURL,rating,id:movies.length+1}))
handleClose()
}
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
       Add movie
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
              onChange={(event)=>settitle(event.target.value)}
                type="text"
                placeholder="enter the movie title"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>description</Form.Label>
              <Form.Control
              onChange={(event)=>setdescription(event.target.value)}
                type="text"
                placeholder="description"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>posterURL </Form.Label>
              <Form.Control
              onChange={(event)=>setposterURL(event.target.value)}
                type="text"
                placeholder="poster url"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>rating </Form.Label>
              <Form.Control
              onChange={(event)=>setrating(event.target.value)}
                type="number"
                placeholder="rating"
                autoFocus
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={add}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Addmovie;