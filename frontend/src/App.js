import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Search from "./components/search";
import ImageCard from "./components/imageCard";

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_PUB_KEY;
// const UNSPLASH_BASE_URL = `https://api.unsplash.com/`;

const App = () => {
  const [word, setWord] = useState("");
  const [images, setImages] = useState([]);

  console.log(images);

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setImages([{ ...data, title: word }, ...images]);
      })
      .catch((err) => {
        console.log(err);
      });

    setWord(""); //reseting form feild after enter
  };

  // console.log(UNSPLASH_KEY);

  return (
    <div>
      <Header title="Tt's Image Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      {images.map((image, i) => (
        <ImageCard key={i} image={image} />
      ))}
    </div>
  );
};

export default App;
