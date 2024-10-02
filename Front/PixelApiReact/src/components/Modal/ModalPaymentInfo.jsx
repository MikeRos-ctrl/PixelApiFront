import React from "react";
import validator from 'validator';
import { useNavigate } from 'react-router-dom';

function ModalPaymentInfo({ myUserPlan }) {

    const navigate = useNavigate();
    const [inputValue1, setInputValue1] = React.useState('')
    const [inputValue2, setInputValue2] = React.useState('')
    const [error, setError] = React.useState(false)
    const [errorText, setErrorText] = React.useState(false)

    const ValidateFields = () => {

        if (inputValue1 == "" || inputValue2 == "") {
            setError(true)
            setErrorText("Fields are empty")
            setTimeout(() => {
                setError(false);
            }, 3000);
        }
        else if (inputValue1 != inputValue2) {
            setError(true)
            setErrorText("Email must match")
            setTimeout(() => {
                setError(false);
            }, 3000);
        }
        else if (!validator.isEmail(inputValue1)) {
            setError(true)
            setErrorText("Invalid email")
            setTimeout(() => {
                setError(false);
            }, 3000);
        }
        else {
            navigate('/checkout', { state: { plan: myUserPlan, email: inputValue1 } });
        }
    }


    return (
        <>
            <div className="modalContentInformationHeader">
                <h4 className="titleNotMain dark-color">
                    Write your email to continue
                </h4>

                <p className="regularText dark-color">After compleating your payment we will help you create an account.</p>
            </div>

            <div className="modalContentInformationBody">

                <div className="pswInput">
                    <input onChange={(e) => setInputValue1(e.target.value)} className="regularText modalbtn2" placeholder="Email" type="text" />
                </div>

                <div className="pswInput">
                    <input onChange={(e) => setInputValue2(e.target.value)} className="regularText modalbtn2" placeholder="Confirm email" type="text" />
                </div>

                <input className="regularText modalbtn" type="button" value="Continue" onClick={() => ValidateFields()} />

                {error && (
                    <input className="regularText modalbtnerror" type="button" value={errorText} />
                )}

            </div>
        </>
    );
}

export { ModalPaymentInfo };