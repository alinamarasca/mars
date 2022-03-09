import "./App.css";
import { useState } from "react";
import Gallery from "./components/Gallery";
import ChooseDate from "./components/ChooseDate";
import AppContext from "./context/AppContext";

function App() {
  const [date, setDate] = useState(new Date());
  const [photoData, setPhotoData] = useState([]);
  return (
    <AppContext.Provider value={{ date, setDate, photoData, setPhotoData }}>
      <div className="App">
        <ChooseDate />
        <Gallery />
      </div>
    </AppContext.Provider>
  );
}

export default App;
