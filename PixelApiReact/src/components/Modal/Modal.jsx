import React from "react";
import ReactDOM from 'react-dom'
import './index.css';
import xd from './skatingman.jpeg'
import { AppContext } from '../../context';

function Modal({ children }) {

    const { myModal, setMyModal } = React.useContext(AppContext)

    return ReactDOM.createPortal(

        <div className="modal">

            <div className="modalContent">

                <div className="close-icon" onClick={() => {
                    setMyModal({ ...myModal, open: !myModal.open })
                }}>
                    <h5 className="titleNotMain equis">X</h5>
                </div>

                <div className="modalContentLeft">
                    {children}
                </div>

                <div className="modalContentRight">
                    <img src={xd} className="imageModal" alt="" loading="lazy" />
                </div>

            </div>

        </div>, document.getElementById('modal')
    );
}

export { Modal };