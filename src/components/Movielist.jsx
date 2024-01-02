import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ReactStars from "react-stars";
import { deletemovie } from "../redux/Action";
import Editmovie from "./Editmovie";
function Movielist() {
    const dispatch=useDispatch()
  const movies = useSelector((state) => state.movies);
  console.log(movies);
  return (
    <div style={{ display: "flex", gap: "100px", flexWrap: "wrap" }}>
      {movies.map((e) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={e.posterURL} />
          <Card.Body>
            <Card.Title>{e.title}</Card.Title>
            <Card.Text>{e.description}</Card.Text>
            <Card.Text>
              <ReactStars
                count={5}
                value={e.rating}
                size={24}
                color2={"#ffd700"}
              />
            </Card.Text>
            <Button variant="danger" onClick={()=>dispatch(deletemovie(e.id))}>delete</Button>
            <Editmovie movie={e}/>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Movielist;
