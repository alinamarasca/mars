import React, { useContext } from "react";
// import { BsX } from "react-icons/bs";
import AppContext from "../context/AppContext";

function Modal() {
  const { isOpen, setIsOpen } = useContext(AppContext);
  const { img } = useContext(AppContext);

  if (!isOpen) return null;
  return (
    <div
      className="backdrop"
      onClick={e => {
        setIsOpen(false);
      }}
    >
      <div className="modal">
        <div
          className="modal-content"
          onClick={e => {
            setIsOpen(false);
          }}
        >
          <img src={img} alt="Mars Rover" />
        </div>
      </div>
    </div>
  );
}

export default Modal;
