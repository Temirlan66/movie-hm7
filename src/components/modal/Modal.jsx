import React, { useRef } from "react";
import Mybutton from "../mybutton/Mybutton";
import { createPortal } from "react-dom";
import styled from "styled-components";
import "./Modal.css";



export const Bacdrop = ({ onClose }) => {
  return (
    <>
      {createPortal(
        <StyledBacdrop onClick={onClose} />,
        document.getElementById("bacdrop")
      )}
    </>
  );
};

const Modal = ({ onClose, onNewMovieAdd }) => {
  const titleInputRef = useRef("");
  const urlImagesInputRef = useRef("");
  const ratingInputRef = useRef("");

  const saveNewHandler = (event) => {
    event.preventDefault();
    onClose()
    const movieData = {
      id: Math.random() + new Date().getMilliseconds(),
      title: titleInputRef.current.value,
      rating: ratingInputRef.current.value,
      img: urlImagesInputRef.current.src,
    };
    console.log(urlImagesInputRef);
    onNewMovieAdd(movieData);

    titleInputRef.current.value = "";
    ratingInputRef.current.value = "";
    urlImagesInputRef.current.value = "";
  };

  return (
    <>
      <Bacdrop onClose={onClose} />
      <div className="modal">
        <label htmlFor="title">Movie Title</label>
        <input ref={titleInputRef} type="text" name="title" id="title" />

        <label htmlFor="image-url">Image URL</label>
        <input
          ref={urlImagesInputRef}
          type="text"
          name="image-url"
          id="image-url"
        />

        <label htmlFor="rating">Your Rating</label>
        <input
          ref={ratingInputRef}
          type="number"
          step="1"
          max="5"
          min="1"
          name="rating"
          id="rating"
        />

        <div className="btns">
          <Mybutton color="red" onClick={onClose}>
            Cancel
          </Mybutton>
          <Mybutton onClick={saveNewHandler}  color="blue">
            Add
          </Mybutton>
        </div>
      </div>
    </>
  );
};

const StyledBacdrop = styled.div`
  background-color: #0000009c;
  position: absolute;
  width: 100vw;
  height: 100vw;
  top: 0;
  bottom: 0;
  z-index: 12;
`;

export default Modal;
