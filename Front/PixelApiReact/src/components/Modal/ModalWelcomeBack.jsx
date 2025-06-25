import React from "react";
import { LocalDb } from '../../util/LocalDb';
import { ApiCall } from "../../util/ApiCall";
const { Login } = ApiCall()
import { FaEye } from "react-icons/fa";
import { AppContext } from '../../context';

/* Modal Flow
 * ModalLogin -> ModalCreateAccount -> ModalConfirmAccount -> ModalWelcomeAccount 
 * ModalLogin -> ModalWelcomeBack
*/
function ModalWelcomeBack() {

    const { myModal, setMyModal, setMyUser, myUser } = React.useContext(AppContext)

    const [error, setError] = React.useState(false)
    const [errorText, setErrorText] = React.useState(false)
    const [inputStyle, setInputStyle] = React.useState("password")
    const [acctKey, setAccountKey] = React.useState("")

    const changeInput = () => {
        if (inputStyle == 'password') {
            setInputStyle("text")
        } else {
            setInputStyle("password")
        }
    }

    const login = () => {

        if (acctKey == "") {
            setError(true)
            setErrorText("Please fill all the fields")
            setTimeout(() => {
                setError(false);
            }, 3000);
        } else {

            Login(myUser.email, acctKey).then(result => {

                if (result.response != "Not found") {

                    let data = { ...myUser, clientId: result.response.clientId, acctKey: acctKey, ready: true }
                    setMyUser(data)

                    LocalDb.Insert(data).then(() => {
                        setMyModal({ ...myModal, index: 3 });
                    });
                } else {
                    setError(true)
                    setErrorText("Wrong password")
                    setTimeout(() => {
                        setError(false);
                    }, 3000);
                }
            })
        }
    }

    const forgotPwd = () => {
        setMyModal({ ...myModal, index: 1, flow: 'D' })
    }

    return (
        <>
            <div className="modalContentInformationHeader">
                <h4 className="titleNotMain dark-color">
                    <span className="clickable" onClick={() => {
                        setMyModal({ ...myModal, index: 0 })
                    }}>⬅️</span>
                    Welcome back!
                </h4>
                <h5 className="regularText dark-color">Use your password to access your account</h5>
            </div>

            <div className="modalContentInformationBody">

                <div className="pswInput">
                    <input onChange={(e) => setAccountKey(e.target.value)} className="regularText modalbtn2" placeholder="Password" type={inputStyle} />
                    <FaEye onClick={() => { changeInput() }} className="pswEye icon" />

                    <p className="regularText dark-color italics" onClick={() => forgotPwd()}>Forgot my password</p>
                </div>

                <input onClick={() => login()} className="regularText modalbtn" type="button" value="Continue" />

                {error && (
                    <input className={`regularText mt-1_5 ${errorText == "Information was updated!" || errorText == "You will be logged out!" ? 'modalbtnsuccess' : ' modalbtnerror'}`} type="button" value={errorText} />
                )}
            </div>
        </>
    );
}

export { ModalWelcomeBack };