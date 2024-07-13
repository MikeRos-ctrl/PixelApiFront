import React from "react";
import validator from 'validator';
import { useRef } from 'react';

function ModalLogin({ ValidateAccount_ }) {

    const inputRef = useRef(null);
    const [emailError, setEmailError] = React.useState(false)

    const validateEmail = (email) => {

        if (validator.isEmail(email)) {
            ValidateAccount_(email)
        }
        else {
            setEmailError(true)
            setTimeout(() => {
                setEmailError(false);
            }, 3000);
        }
    }

    return (
        <>
            <div className="modalContentInformationHeader">
                <h4 className="titleNotMain dark-color">Use your Email</h4>
                <h5 className="regularText dark-color">We'll revise if you have an account, if not we help you create one</h5>
            </div>

            <div className="modalContentInformationBody">
                <input ref={inputRef} className="regularText modalbtn2" placeholder="example@example.com" />
                <input onClick={() => validateEmail(inputRef.current.value)} className="regularText modalbtn" type="button" value="Continue" />
                {emailError && (
                    <input className="regularText modalbtnerror" type="button" value="Invalid email" />
                )}
            </div>
        </>
    );
}

export { ModalLogin };