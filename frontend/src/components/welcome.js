import React from "react";
import { Button, Jumbotron } from "react-bootstrap";

const Welcome = () => {
  return (
    <Jumbotron>
      <h1>Tim Tinker's Image Gallery</h1>
      <p>
        Simple React App that uses Unsplash API to retrieve images. In order to
        start, enter ant search term in the input field above!
      </p>
      <p>
        <Button variant="primary" href="https://unsplash.com" target="_blank">
          Unsplash Website
        </Button>
      </p>
    </Jumbotron>
  );
};

export default Welcome;
