import React from "react";
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { LocalDb } from '../../util/LocalDb';

function ModalConfirmAccount({ ConfirmAccount, setMyUser, myUser, setModalIndex }) {

    const navigate = useNavigate();
    const inputRef = useRef(null);
    const [error, setError] = React.useState(false)
    const [errorText, setErrorText] = React.useState(false)

    const validateFields = () => {
        if (inputRef.current.value == "") {
            setError(true)
            setErrorText("Field is empty")
            setTimeout(() => {
                setError(false);
            }, 3000);
        } else {

            ConfirmAccount(myUser.id, inputRef.current.value).then(result => {

                if (result.response.code == 'AA') {

                    myUser.ready = true
                    setMyUser(myUser);
                    LocalDb.Insert(myUser)
                    setModalIndex(3)
                } else {
                    setError(true)
                    setErrorText("Wrong token")
                    setTimeout(() => {
                        setError(false);
                    }, 3000);
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
                    <input className="regularText modalbtnerror" type="button" value={errorText} />
                )}
            </div>
        </>
    );
}

export { ModalConfirmAccount };