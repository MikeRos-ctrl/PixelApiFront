import React, { Component } from 'react';
import { AppContext } from '../../context';

class ModalWelcomeAccount extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentWillUnmount() {
        const { myModal, setMyModal } = this.props
        setMyModal({ ...myModal, open: !myModal.open })
    }

    render() {
        const { setPage, myModal, setMyModal } = this.props

        return (
            <>
                <div className="modalContentInformationHeader">

                    <h4 className="titleNotMain dark-color">
                        <span className="clickable" >✅</span>
                        Welcome to your account
                    </h4>

                    <h5 className="regularText dark-color">We are excited to have you on board!</h5>
                </div>

                <div className="modalContentInformationBody">
                    <input onClick={() => {
                        setPage(2)
                        setMyModal({ ...myModal, open: !myModal.open })
                    }} className="regularText modalbtn" type="button" value="Continue" />
                </div>
            </>
        );
    }
}

function ModalWelcomeAccountWrapper() {
    const { myModal, setMyModal, setPage } = React.useContext(AppContext)
    return <ModalWelcomeAccount myModal={myModal} setMyModal={setMyModal} setPage={setPage} />
}

export { ModalWelcomeAccountWrapper as ModalWelcomeAccount };