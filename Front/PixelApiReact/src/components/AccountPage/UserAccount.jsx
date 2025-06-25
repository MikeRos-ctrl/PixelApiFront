import React from "react";
import { FaEye } from "react-icons/fa";
import validator from 'validator';
import { ApiCall } from "../../util/ApiCall";
const { UpdateAccount } = ApiCall()
import { LocalDb } from '../../util/LocalDb';
import { AppContext } from '../../context';


function UserAccount() {

    const { myUser, setPage, setMyUser, setMyModal } = React.useContext(AppContext)
    const [newEmail, setNewEmail] = React.useState(myUser.email)
    const [newPassword, setNewPassword] = React.useState(myUser.acctKey)
    const [newPassword2, setNewPassword2] = React.useState(myUser.acctKey)
    const [error, setError] = React.useState(false)
    const [errorText, setErrorText] = React.useState(false)
    const [inputStyle, setInputStyle] = React.useState("password")
    const [inputStyle2, setInputStyle2] = React.useState("password")

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
        else if (newPassword < 8) {
            setError(true)
            setErrorText("Password is lower that 8 characters")
            setTimeout(() => {
                setError(false);
            }, 3000);
        }
        else {


            UpdateAccount(myUser, myUser.email, myUser.acctKey).then(result => {

                LocalDb.Delete()
                setError(true)
                setErrorText("You will be logged out!")

                setTimeout(() => {
                    setError(false);
                    setMyUser({
                        clientId: null,
                        email: null,
                        acctKey: null,
                        ready: false,
                    })
                    setMyModal({
                        index: 0,
                        flow: 'A',
                        open: false
                    })
                    setPage(0)
                }, 5000);
            })
        }
    }

    return (
        <>
            <div className="infoContainerForm">

                <div className="form">
                    <p className="titleNotMain grey-color">Email</p>
                    <input defaultValue={myUser.email} className="regularText readOnlyinputAcctPage" readOnly />
                </div>

                <div className="form">
                    <p className="titleNotMain grey-color">Password</p>

                    <div className="pswInput">
                        <input defaultValue={myUser.acctKey} onChange={(e) => setNewPassword(e.target.value)} className="regularText inputAcctPage" placeholder="Password" type={inputStyle} />
                        <FaEye onClick={() => { changeInput() }} className="pswEye icon" />
                    </div>
                </div>

                <div className="form">
                    <p className="titleNotMain grey-color">Confirm password</p>

                    <div className="pswInput">
                        <input defaultValue={myUser.acctKey} onChange={(e) => setNewPassword2(e.target.value)} className="regularText inputAcctPage" placeholder="Password" type={inputStyle2} />
                        <FaEye onClick={() => { changeInput2() }} className="pswEye icon" />
                    </div>
                </div>

                <input onClick={() => submit()} className="titleNotMain pricingbtn2 mt-2" type="button" value="Update" />
                <input className="titleNotMain pricingbtn2" type="button" value="Delete Account" />

                {error && (
                    <input className={`regularText ${errorText == "Information was updated!" || errorText == "You will be logged out!" ? 'modalbtnsuccess' : ' modalbtnerror'}`} type="button" value={errorText} />
                )}
            </div>
        </>
    )

}

export { UserAccount }