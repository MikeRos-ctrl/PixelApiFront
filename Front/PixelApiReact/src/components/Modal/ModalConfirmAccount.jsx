import React from "react";
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function ModalConfirmAccount({ ConfirmAccount, setMyUser, myUser, setModalIndex }) {

    const navigate = useNavigate();
    const inputRef = useRef(null);
    const [error, setError] = React.useState(false)

    const validateFields = () => {
        if (inputRef.current.value == "") {
            setError(true)
            setTimeout(() => {
                setError(false);
            }, 3000);
        } else {

            ConfirmAccount(myUser.id, inputRef.current.value).then(result => {

                if (result.response.code == 'AA') {

                    if (myUser.accountType == "21DayTrial") {

                        myUser.ready = true
                        setMyUser(myUser);
                        navigate('/profile');
                    } else {
                        console.log("PAYPAL XD")
                    }
                }

            }).catch(error => {
                console.error("I've got a mistake: ", error);
            })
        }
    }

    return (
        <>
            <div className="modalContentInformationHeader">

                <h4 className="titleNotMain dark-color">
                    <span className="clickable" onClick={() => setModalIndex(1)}>⬅️</span>
                    Confirm your account
                </h4>

                <h5 className="regularText dark-color">Insert the confirmation code that was sent to your email</h5>
            </div>

            <div className="modalContentInformationBody">
                <input ref={inputRef} className="regularText modalbtn2" placeholder="0000000" />
                <input onClick={() => validateFields()} className="regularText modalbtn" type="button" value="Continue" />
                {error && (
                    <input className="regularText modalbtnerror" type="button" value="Field is empty" />
                )}
            </div>
        </>
    );
}

export { ModalConfirmAccount };