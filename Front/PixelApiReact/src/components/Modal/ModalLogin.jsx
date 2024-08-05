import React from "react";
import validator from 'validator';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function ModalLogin({ ValidateAccount, setModalIndex, setUserLogin, setMyUser }) {

    const navigate = useNavigate();
    const inputRef = useRef(null);
    const [emailError, setEmailError] = React.useState(false)

    const validateEmail = (email) => {

        if (validator.isEmail(email)) {

            ValidateAccount(email).then(result => {

                console.log(result)

                if (result.response.code == "A") {
                    setModalIndex(1)

                    let myUser = {
                        id: "",
                        email: email,
                    }

                    setUserLogin(myUser)
                }
                else if (result.response.code == "B") {
                    setMyUser(result.response.id)
                    navigate('/profile');
                }
            }).catch(error => {
                console.error("I've got a mistake: ", error);
            });
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