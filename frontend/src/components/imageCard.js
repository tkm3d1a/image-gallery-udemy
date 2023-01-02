import React from "react";
import { Card, Button, Nav } from "react-bootstrap";

const ImageCard = ({ image, deleteImage, saveImage }) => {
  const authorURL = image.user?.portfolio_url;
  const authorName = image.user?.name || "No Autho Name";

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image.urls.small} />
      <Card.Body>
        <Card.Title>{image.title?.toUpperCase()}</Card.Title>
        <Card.Text>{image.description || image.alt_description}</Card.Text>
        <Button variant="primary" onClick={() => deleteImage(image.id)}>
          Delete
        </Button>{" "}
        {!image.isSaved && (
          <Button variant="secondary" onClick={() => saveImage(image.id)}>
            Save
          </Button>
        )}
      </Card.Body>
      <Card.Footer class="text-muted text-center">
        {authorURL && (
          <Nav.Link href={authorURL} target="_blank">
            {authorName}
          </Nav.Link>
        )}
        {!authorURL && authorName}
      </Card.Footer>
    </Card>
  );
};

export default ImageCard;
