import React from "react";
import ReactDOM from 'react-dom'
import './index.css';
import xd from './cat-2.jpeg'
import { ModalLogin } from "./ModalContents";

function Modal({ changeModalstatus_ }) {

    const ModalComponents = {
        "1": <ModalLogin />
    };

    return ReactDOM.createPortal(

        <div className="modal">

            <div className="modalContent">

                <div className="close-icon" onClick={() => changeModalstatus_()}>
                    <h5 className="titleNotMain equis">X</h5>
                </div>

                <div className="modalContentLeft">
                    {ModalComponents[1]}
                </div>

                <div className="modalContentRight">
                    <img src={xd} className="imageModal" alt="" />
                </div>

            </div>

        </div>, document.getElementById('modal')
    );
}

export { Modal };