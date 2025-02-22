import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
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

        const { navigate } = this.props

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
                    <input onClick={() => { navigate('/profile') }} className="regularText modalbtn" type="button" value="Continue" />
                </div>
            </>
        );
    }
}

function ModalWelcomeAccountWrapper() {
    const { myModal, setMyModal } = React.useContext(AppContext)
    const navigate = useNavigate();

    return <ModalWelcomeAccount navigate={navigate} myModal={myModal} setMyModal={setMyModal} />
}

export { ModalWelcomeAccountWrapper as ModalWelcomeAccount };