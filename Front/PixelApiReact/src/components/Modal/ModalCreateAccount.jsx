import React from "react";
import { FaEye } from "react-icons/fa";
import { UsePixelApi } from "../../util/UsePixelApi";
const { CreateAccount } = UsePixelApi()

/* Modal Flow
 * ModalLogin -> ModalCreateAccount -> ModalConfirmAccount -> ModalWelcomeAccount
 */
function ModalCreateAccount({ myUser, setMyUser, setModalIndex }) {

    const [inputValue1, setInputValue1] = React.useState('')
    const [inputValue2, setInputValue2] = React.useState('')
    const [error, setError] = React.useState(false)
    const [errorText, setErrorText] = React.useState(false)
    const [inputStyle, setInputStyle] = React.useState("password")
    const [inputStyle2, setInputStyle2] = React.useState("password")

    /*
    * role = 2 Equals to COSTUMER
    */

    const ValidateFields = () => {

        if (inputValue1.length < 8) {
            setError(true)
            setErrorText("Password is lower that 8 characters")
            setTimeout(() => {
                setError(false);
            }, 3000);
        }
        else if (inputValue1 == "" || inputValue2 == "") {
            setError(true)
            setErrorText("Fields are empty")
            setTimeout(() => {
                setError(false);
            }, 3000);
        }
        else if (inputValue1 != inputValue2) {
            setError(true)
            setErrorText("Password must match")
            setTimeout(() => {
                setError(false);
            }, 3000);
        }
        else {
            CreateAccount({
                role: 2,
                email: myUser.email,
                accountKey: inputValue1,
            }).then(result => {
                myUser.id = result.value.id
                myUser.accountKey = inputValue1
                setMyUser(myUser)
                setModalIndex(2)
            }).catch(error => {
                console.error("I've got a mistake: ", error);
            })
        }
    }

    const changeInput = () => {
        if (inputStyle == 'password') {
            setInputStyle("text")
        } else {
            setInputStyle("password")
        }
    }

    const changeInput2 = () => {
        if (inputStyle2 == 'password') {
            setInputStyle2("text")
        } else {
            setInputStyle2("password")
        }
    }

    return (
        <>
            <div className="modalContentInformationHeader">
                <h4 className="titleNotMain dark-color">
                    <span className="clickable" onClick={() => setModalIndex(0)}>⬅️</span>
                    Create your account
                </h4>

                <h5 className="regularText dark-color">Password must be at least 8 characters</h5>
            </div>

            <div className="modalContentInformationBody">

                <div className="pswInput">
                    <input value={inputValue1} onChange={(e) => setInputValue1(e.target.value)} className="regularText modalbtn2" placeholder="Password" type={inputStyle} />
                    <FaEye onClick={() => { changeInput() }} className="pswEye icon" />
                </div>

                <div className="pswInput">
                    <input value={inputValue2} onChange={(e) => setInputValue2(e.target.value)} className="regularText modalbtn2" placeholder="Confirm password" type={inputStyle2} />
                    <FaEye onClick={() => { changeInput2() }} className="pswEye icon" />
                </div>

                <input className="regularText modalbtn" type="button" value="Continue" onClick={() => ValidateFields()} />

                {error && (
                    <input className="regularText modalbtnerror" type="button" value={errorText} />
                )}

            </div>
        </>
    );
}

export { ModalCreateAccount };