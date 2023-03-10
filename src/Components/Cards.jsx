import React from "react";
import { Card,Button } from "react-bootstrap";

export default function Cards(props) {
  return (
    <div>
      <Card style={{ width: "17rem" }}>
        <Card.Img style={{ height: "17rem" }} variant="top" src={props.items.photograph} />
        <Card.Body>
          <Card.Title>{props.items.name}</Card.Title>
          <Card.Text>{props.items.neighborhood}</Card.Text>
          <Card.Text>Type:{props.items.cuisine_type}</Card.Text>
          <Button variant="primary">Select</Button>
        </Card.Body>
      </Card>
     
    </div>
  );
}
