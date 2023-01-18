import React from 'react';
import Mybutton from '../mybutton/Mybutton';
import { createPortal } from 'react-dom';
import "./ModalDelete.css"
import styled from 'styled-components';



export const Bacdrop =({onClose})=>{
    
    return(
      <>
      {createPortal(
        <StyledBacdrop
        onClick={onClose}/>,
        document.getElementById("bacdrop")
      )}
      </>
    )
  }
const ModalDelete = ({onClose,onConfirm}) => {
    
    return (
        <>
        <Bacdrop/>
        <div className='modal-delete'>
            <h2>Are you sure wanna delete this item</h2>
            <div className='delete-btn'>
            <Mybutton color="red" onClick={onClose}>No</Mybutton> 
            <Mybutton color="blue" onClick={onConfirm}>Yes</Mybutton>

            </div>
        

        </div>
        </>
    );
};

const StyledBacdrop =styled.div`
  background-color: #0000009c;
  position: absolute;
  width: 100vw;
  height: 100vw;
  top: 0;
  bottom: 0;
  z-index: 12;
`
export default ModalDelete;