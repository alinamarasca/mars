import "./sass/App.scss";
import { useState } from "react";
import Gallery from "./components/Gallery";
import ChooseDate from "./components/ChooseDate";
import AppContext from "./context/AppContext";
import Modal from "./components/Modal";
import axios from "axios";
import NASA_API_KEY from "./apikey.js";

function App() {
  const [date, setDate] = useState(new Date());
  const [photoData, setPhotoData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [img, setImg] = useState();

  async function fetchPhotos(usersDate) {
    axios
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${usersDate}&page=1&api_key=${NASA_API_KEY}`
      )
      .then(res => setPhotoData(res.data.photos))
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <AppContext.Provider
      value={{
        date,
        setDate,
        photoData,
        setPhotoData,
        isOpen,
        setIsOpen,
        img,
        setImg,
        fetchPhotos
      }}
    >
      <div className="App">
        <div className="container">
          <ChooseDate />
          <Gallery />
          <Modal />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
