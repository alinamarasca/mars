import "./sass/App.scss";
import { useState } from "react";
import Gallery from "./components/Gallery";
import ChooseDate from "./components/ChooseDate";
import AppContext from "./context/AppContext";
import Modal from "./components/Modal";

function App() {
  const [date, setDate] = useState(new Date());
  const [photoData, setPhotoData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [img, setImg] = useState();

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
        setImg
      }}
    >
      <div className="App">
        <ChooseDate />
        <Gallery />
        <Modal />
      </div>
    </AppContext.Provider>
  );
}

export default App;
