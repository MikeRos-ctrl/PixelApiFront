import React from "react";
import validator from 'validator';
import { FaEye } from "react-icons/fa";
import { UsePixelApi } from "../../util/UsePixelApi";
const { UpdateAccount } = UsePixelApi()

function ProfileModifyInformation({ myUser }) {

    const [newEmail, setNewEmail] = React.useState(myUser.email)
    const [newPassword, setNewPassword] = React.useState(myUser.accountKey)
    const [newPassword2, setNewPassword2] = React.useState(myUser.accountKey)
    const [error, setError] = React.useState(false)
    const [errorText, setErrorText] = React.useState(false)
    const [inputStyle, setInputStyle] = React.useState("password")
    const [inputStyle2, setInputStyle2] = React.useState("password")

    const submit = () => {

        if (newEmail == "" || newPassword == "" || newPassword2 == "") {
            setError(true)
            setErrorText("Please fill all the fields")
            setTimeout(() => {
                setError(false);
            }, 3000);
        }
        else if (!validator.isEmail(newEmail)) {
            setError(true)
            setErrorText("Email is invalid")
            setTimeout(() => {
                setError(false);
            }, 3000);
        }
        else if (newPassword != newPassword2) {
            setError(true)
            setErrorText("Password must match")
            setTimeout(() => {
                setError(false);
            }, 3000);
        }
        else {
            myUser.email = newEmail;
            myUser.accountKey = newPassword;
            UpdateAccount(myUser).then(result => {

                //revisar que pedo con mis credenciales encriptadas

                console.log(result)
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
            <div className='infoContainer'>

                <div className='pricingCardTitle titleNotMain'>
                    <h3 className='dark-light'>Update your data</h3>
                </div>

                <div className="infoContainerForm">

                    <input defaultValue={myUser.email} onChange={(e) => setNewEmail(e.target.value)} className="regularText modalbtn3" placeholder="your email" />

                    <div className="pswInput">
                        <input defaultValue={myUser.accountKey} onChange={(e) => setNewPassword(e.target.value)} className="regularText modalbtn3" placeholder="Password" type={inputStyle} />
                        <FaEye onClick={() => { changeInput() }} className="pswEye icon" />
                    </div>

                    <div className="pswInput">
                        <input defaultValue={myUser.accountKey} onChange={(e) => setNewPassword2(e.target.value)} className="regularText modalbtn3" placeholder="Password" type={inputStyle2} />
                        <FaEye onClick={() => { changeInput2() }} className="pswEye icon" />
                    </div>

                    <input onClick={() => submit()} className="titleNotMain pricingbtn2" type="button" value="Update" />
                </div>

                {error && (
                    <input className="regularText modalbtnerror mt-1_5" type="button" value={errorText} />
                )}

            </div>
        </>
    )
}

export { ProfileModifyInformation };