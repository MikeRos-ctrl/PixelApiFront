import React, { useState, useEffect, Component } from 'react';
import './index.css';
import Logo from '../../assets/image.png';
import Logoxd from '../../assets/icon4.png';
import { useNavigate } from 'react-router-dom';
import { ProfileModifyInformation } from './ProfileModifyInformation';
import { ProfileUpdatePlan } from './ProfileUpdatePlan';
import { LocalDb } from '../../util/LocalDb';
import { AppContext } from '../../context';

class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            buttonId: 1,
            index: 1,
        }
    }

    componentDidMount() {

        // const { myUser } = this.props;

        // console.log(myUser)

    }

    updateButton = (newId) => {

        const { navigate, setMyUser } = this.props;

        //        if (newId != 4) {
        this.setState({
            buttonId: newId,
            index: newId
        })
        //      }
        //     else {

        // LocalDb.Delete()

        // setMyUser({
        //     id: null,
        //     email: null,
        //     accountKey: null,
        //     ready: false,
        // })
        // navigate('/')
        //   }
    }

    render() {

        const { buttonId, index } = this.state;
        const { myUser, navigate, setMyUser, setMyModal } = this.props;

        const ProfileComponents = {
            1: <ProfileUpdatePlan myUser={myUser} />,
            2: <ProfileModifyInformation myUser={myUser} setMyUser={setMyUser} setMyModal={setMyModal} />,
        }

        return (

            <div className="profileContainer" >

                <div className="profileContainerHeader">

                    <div onClick={() => navigate('/')} className='clickable'>
                        <img src={Logoxd} className="qwer" alt="" />
                    </div>

                    <div className='profileContainerHeaderOptions'>
                        <input onClick={() => { this.updateButton(1) }} className={` titleNotMain ${buttonId == 1 ? (" button-5") : (" button-6")}  `} type="button" value="Plan" />
                        <input onClick={() => { this.updateButton(2) }} className={` titleNotMain ${buttonId == 2 ? (" button-5") : (" button-6")}  `} type="button" value="Account" />
                        <input onClick={() => { this.updateButton(4) }} className={` titleNotMain ${buttonId == 3 ? (" button-5") : (" button-6")}  `} type="button" value="Log out" />
                    </div>
                </div>

                <div className='profileContent'>
                    {ProfileComponents[index]}
                </div>

            </div>
        )
    }
}

function ProfileWrapper(props) {
    const { setMyUser, myUser, setMyModal } = React.useContext(AppContext)
    const navigate = useNavigate();
    return <Profile {...props} setMyModal={setMyModal} myUser={myUser} setMyUser={setMyUser} navigate={navigate} />;
}

export { ProfileWrapper as Profile };