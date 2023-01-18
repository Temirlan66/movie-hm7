import React, { useState } from 'react';
import Modal from "../modal/Modal";
import Mybutton from "../mybutton/Mybutton";
import "./Header.css"


const Header = ({onNewMovieAdd}) => {
    const [isModalVisible, setModalVisible] = useState(false)

    const modalHandler = ()=>{
        setModalVisible((prevState)=> !prevState)
    }
    return (
        <div className='header-container'>
            <h2>Favorite Movies</h2>
            {isModalVisible ? (
                <Modal
                onNewMovieAdd={onNewMovieAdd}
                onClose={modalHandler}/>
            ):null}
           <Mybutton onClick={modalHandler}   color='orange'>Add Movies</Mybutton>
        </div>
    );
};

export default Header;