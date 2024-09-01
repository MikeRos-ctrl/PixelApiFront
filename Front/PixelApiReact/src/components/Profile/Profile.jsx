import React, { useState, useEffect, Component } from 'react';
import './index.css';
import Logo from '../../assets/image.png';
import Logoxd from '../../assets/icon4.png';
import { useNavigate } from 'react-router-dom';
import { ProfileModifyInformation } from './ProfileModifyInformation';
import { ProfileUpdatePlan } from './ProfileUpdatePlan';

class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            myWindowLength: (window.innerWidth <= 800) ? false : true,
            buttonId: 1,
            index: 1,
        }
    }

    componentDidMount() {
        window.addEventListener('resize', () => {
            this.setState({
                myWindowLength: (window.innerWidth <= 900) ? false : true,
            });
        });
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    updateButton = (newId) => {
        this.setState({
            buttonId: newId,
            index: newId
        })
    }

    render() {

        const { myWindowLength, buttonId, index } = this.state;
        const { myUser, navigate } = this.props;

        const ProfileComponents = {
            1: <ProfileModifyInformation myUser={myUser} />,
            2: <ProfileUpdatePlan />,
        }

        let validatedEmail = myUser.email.length > 11 ? myUser.email.slice(0, 11) : myUser.email.length;

        if (myWindowLength) {
            return (

                <div className="profileContainer" >

                    <div className="profileLeft">

                        <div className='profilePicInfo'>
                            <img src={Logo} className="profilePic" alt="" />
                            <h5 className="regularText nepe">{validatedEmail + ".."}</h5>
                        </div>

                        <div className='profileLeftMenu'>
                            <h5 onClick={() => { this.updateButton(1) }} className={`clickable regularText menuOptions ${buttonId == 1 ? ("selected") : ("")}`}>Modify information</h5>
                            <h5 onClick={() => { this.updateButton(2) }} className={`clickable regularText menuOptions ${buttonId == 2 ? ("selected") : ("")}`}>Update plan</h5>
                            <h5 onClick={() => { this.updateButton(3) }} className={`clickable regularText menuOptions ${buttonId == 3 ? ("selected") : ("")}`}>Delete account</h5>
                        </div>
                    </div>

                    <div className="profileRight">

                        <div onClick={() => navigate('/')} className='profileRightMenu clickable'>
                            <img src={Logoxd} className="qwer" alt="" />
                        </div>

                        <div className='profileRightContent'>

                            {ProfileComponents[index]}

                        </div>
                    </div>

                </div>
            )
        } else {
            return (
                <h5>responsive xd</h5>
            )
        }
    }
}

function ProfileWithNavigate(props) {
    const navigate = useNavigate();
    return <Profile {...props} navigate={navigate} />;
}

export { ProfileWithNavigate as Profile };