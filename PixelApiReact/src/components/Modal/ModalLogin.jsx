import React from "react";
import validator from 'validator';
import { useRef } from 'react';
import { AppContext } from '../../context';
import { ApiCall } from "../../util/ApiCall";
const { ValidateAccount } = ApiCall()

function ModalLogin() {

    //ELIMINATE STATE OF MY USER XD 

    const { myModal, setMyModal, setMyUser, myUser } = React.useContext(AppContext)
    const inputRef = useRef(null);
    const [emailError, setEmailError] = React.useState(false)

    const validateEmail = (email) => {

        if (validator.isEmail(email)) {

            ValidateAccount(email).then(result => {

                /*
                 * NEW USER
                 */
                if (result.response.code == "A") {
                    setMyUser({ ...myUser, email: email })
                    setMyModal({ ...myModal, index: 1 })
                }

                /*
                 * NORMAL USER LOGIN FIX THIS PART XD
                 */
                else if (result.response.code == "B") {
                    setMyUser({ ...myUser, email: email })
                    setMyModal({ ...myModal, index: 4, flow: 'B' })
                }

                /*
                * ACCOUNT HASN'T BEEN ACTIVATED
                */
                else if (result.response.code == "C") {

                    let data = (result.response.additionalField).split(",")

                    setMyUser({
                        clientId: data[0],
                        email: email,
                        acctKey: data[1],
                        ready: false,
                    })

                    setMyModal({ ...myModal, index: 2, flow: 'C' })
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
                <h4 className="titleNotMain dark-color">Welcome</h4>
                <h5 className="regularText dark-color">Use your email to find your account, otherwise we'll help you create one</h5>
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