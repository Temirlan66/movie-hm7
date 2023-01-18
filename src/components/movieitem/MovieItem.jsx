import React, { useState } from "react";
import ModalDelete from "../modalDelete/ModalDelete";
import Mybutton from "../mybutton/Mybutton";
import "./MovieItem.css";



const MovieItem = ({ data ,deleteMoiveHanler}) => {
  const [isModalVisible , setModalVisible] = useState(false)

  const toggoleModalHandler =()=>{
    setModalVisible((prevState)=> !prevState)
  }

  const confirmHandler = ()=>{
    setModalVisible(false)
    deleteMoiveHanler(data.id)
    console.log('btn was clicked');
  }

  return (
    <>
    {isModalVisible ? <ModalDelete onClose={toggoleModalHandler} onConfirm={confirmHandler}/> : null}
    <li className="movie-element">
      <div className="movie-element__image">
        <img src={data.img} alt="" />
      </div>
      <div className="movie_element__info">
        <h2>{data.title}</h2>
        <p>{data.rating}/5 starts</p>
        <Mybutton color="red" onClick={toggoleModalHandler}>Delete</Mybutton>
      </div>
    </li>
    </>
  );
};

export default MovieItem;
