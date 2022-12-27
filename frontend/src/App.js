import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Search from "./components/search";
import ImageCard from "./components/imageCard";
import Welcome from "./components/welcome";
import { Container, Row, Col } from "react-bootstrap";

// const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_PUB_KEY;
// const UNSPLASH_BASE_URL = `https://api.unsplash.com/`;
const API_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:5050";

const App = () => {
  const [word, setWord] = useState("");
  const [images, setImages] = useState([]);

  // console.log(images);
  // console.log(process.env);

  const handleSearchSubmit = async (e) => {
    e.preventDefault();

    // console.log("sending fetch request");
    // fetch(`${API_URL}/new-image?query=${word}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log("adding found image");
    //     setImages([{ ...data, title: word }, ...images]);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    try {
      // console.log("sending axios fetch request");
      const res = await axios.get(`${API_URL}/new-image?query=${word}`);
      // console.log("adding found image");
      setImages([{ ...res.data, title: word }, ...images]);
    } catch (error) {
      console.log(error);
    }

    // console.log("Clearing search form...");
    setWord(""); //reseting form feild after enter
  };

  const handleDeleteImage = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

  return (
    <div>
      <Header title="Tt's Image Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      <Container className="mt-4">
        {images.length ? (
          <Row xs={1} md={2} lg={3}>
            {images.map((image, i) => (
              <Col key={i}>
                <ImageCard image={image} deleteImage={handleDeleteImage} />
              </Col>
            ))}
          </Row>
        ) : (
          <Welcome />
        )}
      </Container>
    </div>
  );
};

export default App;
