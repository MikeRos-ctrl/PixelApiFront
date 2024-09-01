import React from "react";
import validator from 'validator';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { LocalDb } from '../../util/LocalDb';
import { UsePixelApi } from "../../util/UsePixelApi";
const { ValidateAccount } = UsePixelApi()

/* Modal Flow
 * ModalLogin -> ModalCreateAccount -> ModalConfirmAccount -> ModalWelcomeAccount
 */
function ModalLogin({ setModalIndex, setMyUser }) {

    const navigate = useNavigate();
    const inputRef = useRef(null);
    const [emailError, setEmailError] = React.useState(false)

    const validateEmail = (email) => {

        if (validator.isEmail(email)) {

            ValidateAccount(email).then(result => {

                if (result.response.code == "A") {

                    setMyUser({
                        id: null,
                        accountType: null,
                        email: email,
                        accountKey: null,
                        ready: false
                    })
                    setModalIndex(1)
                }

                //NORMAL USER LOGIN
                else if (result.response.code == "B") {

                    console.log(result)

                    setMyUser({
                        id: result.response.id,
                        accountType: null,
                        email: email,
                        ready: true
                    })

                    LocalDb.Insert({
                        id: result.response.id,
                        accountType: null,
                        email: email,
                        ready: true
                    })

                    navigate('/profile');
                }
                //ACCOUNT HASN'T BEEN ACTIVATED
                else if (result.response.code == "C") {


                    setMyUser({
                        id: result.response.additionalField,
                        accountType: null,
                        email: email,
                        ready: false
                    })

                    setModalIndex(2)
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