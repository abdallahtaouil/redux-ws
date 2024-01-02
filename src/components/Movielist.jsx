import React from "react";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ReactStars from "react-stars";
function Movielist() {
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
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Movielist;
