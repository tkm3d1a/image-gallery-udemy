import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Search from "./components/search";
import ImageCard from "./components/imageCard";
import Welcome from "./components/welcome";
import Loader from "./components/loader";
import { Container, Row, Col } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:5050";

const App = () => {
  const [word, setWord] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSavedImages = async () => {
      try {
        const res = await axios.get(`${API_URL}/images`);
        setImages(res.data || []);
        toast.success("Saved images downloaded!");
        setLoading(false);
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    };

    getSavedImages();
  }, []);

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`${API_URL}/new-image?query=${word}`);
      toast.info(`Image ${word.toUpperCase()} was found!`);
      setImages([{ ...res.data, title: word }, ...images]);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }

    setWord(""); //reseting form feild after enter
  };

  const handleDeleteImage = async (id) => {
    try {
      const res_delete = await axios.delete(`${API_URL}/images/${id}`);
      if (res_delete.data?.deleted_id) {
        console.log(res_delete.data?.deleted_id);
        // notify();
        toast.error(`Deleted ${res_delete.data?.deleted_title.toUpperCase()}`);
        setImages(images.filter((image) => image.id !== id));
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const handleSaveImage = async (id) => {
    const imageToBeSaved = images.find((image) => image.id === id);
    imageToBeSaved.isSaved = true;
    try {
      const res = await axios.post(`${API_URL}/images`, imageToBeSaved);
      if (res.data?.inserted_id) {
        setImages(
          images.map((image) =>
            image.id === id ? { ...image, isSaved: true } : image
          )
        );
        toast.info(`Saved ${imageToBeSaved.title.toUpperCase()}`);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div>
      <Header title="Tt's Image Gallery" />
      {loading ? (
        <Loader />
      ) : (
        <>
          <Search
            word={word}
            setWord={setWord}
            handleSubmit={handleSearchSubmit}
          />
          <Container className="mt-4">
            {images.length ? (
              <Row xs={1} md={2} lg={3}>
                {images.map((image, i) => (
                  <Col key={i}>
                    <ImageCard
                      image={image}
                      deleteImage={handleDeleteImage}
                      saveImage={handleSaveImage}
                    />
                  </Col>
                ))}
              </Row>
            ) : (
              <Welcome />
            )}
          </Container>
        </>
      )}
      <ToastContainer position="bottom-right" autoClose={1000} />
    </div>
  );
};

export default App;
