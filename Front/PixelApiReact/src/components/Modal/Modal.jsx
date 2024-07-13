import React from "react";
import ReactDOM from 'react-dom'
import './index.css';
import xd from './cat-2.jpeg'
import { ModalLogin } from "./ModalLogin";
import { ModalConfirmAccount } from "./ModalConfirmAccount";
import { ModalCreateAccount } from "./ModalCreateAccount";

function Modal({ changeModalstatus_, ValidateAccount, CreateAccount, ConfirmAccount }) {

    const [index, setIndex] = React.useState(1);
    const [user, setUser] = React.useState("");

    const ValidateAccount_ = (email) => {

        ValidateAccount(email).then(result => {

            if (result.response.code) {
                setIndex(2)

                let myUser = {
                    role: "",
                    email: email,
                    userkeyauth: "",
                    disabled: "",
                    locked: ""
                }

                setUser(myUser)
            }
        }).catch(error => {
            console.error("I've got a mistake: ", error);
        });
    }

    const CreateAccount_ = (myClient) => {
        CreateAccount(myClient).then(result => {
            console.log(result)
            setIndex(3)
        }).catch(error => {
            console.error("I've got a mistake: ", error);
        })
    }

    const GetBackModal = () => {
        setIndex(1)
    }

    const ModalComponents = {
        "1": <ModalLogin ValidateAccount_={ValidateAccount_} />,
        "2": <ModalCreateAccount GetBackModal={GetBackModal} CreateAccount_={CreateAccount_} user={user} />,
        "3": <ModalConfirmAccount />
    };

    return ReactDOM.createPortal(

        <div className="modal">

            <div className="modalContent">

                <div className="close-icon" onClick={() => changeModalstatus_()}>
                    <h5 className="titleNotMain equis">X</h5>
                </div>

                <div className="modalContentLeft">
                    {ModalComponents[index]}
                </div>

                <div className="modalContentRight">
                    <img src={xd} className="imageModal" alt="" />
                </div>

            </div>

        </div>, document.getElementById('modal')
    );
}

export { Modal };