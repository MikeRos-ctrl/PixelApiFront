import React from "react";
import { useNavigate } from 'react-router-dom';

function ModalWelcomeAccount() {

    const navigate = useNavigate();

    return (
        <>
            <div className="modalContentInformationHeader">

                <h4 className="titleNotMain dark-color">
                    <span className="clickable" >✅</span>
                    Welcome to your account
                </h4>

                <h5 className="regularText dark-color">We are excited to have you on board!</h5>
            </div>

            <div className="modalContentInformationBody">
                <input onClick={() => { navigate('/profile') }} className="regularText modalbtn" type="button" value="Continue" />

            </div>
        </>
    );
}

export { ModalWelcomeAccount };