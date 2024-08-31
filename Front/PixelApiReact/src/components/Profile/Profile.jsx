import React, { useState, useEffect, Component } from 'react';
import './index.css';
import Logo from '../../assets/image.png';
import Logoxd from '../../assets/icon4.png';
import { useNavigate } from 'react-router-dom';
import { UsePixelApi } from '../../util/UsePixelApi';

class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            myWindowLength: (window.innerWidth <= 800) ? false : true,
            buttonId: 1
        }
    }

    componentDidMount() {
        window.addEventListener('resize', () => {
            this.setState({
                myWindowLength: (window.innerWidth <= 800) ? false : true,
            });
        });
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    updateButton = (newId) => {
        this.setState({
            buttonId: newId
        })
    }

    render() {

        const { myWindowLength, buttonId } = this.state;
        const { myUser, navigate } = this.props;

        myUser.email = "miguel.rosalesrm@uanl.edu.mx"
        //let validatedEmail = myUser.email.length > 11 ? myUser.email.slice(0, 11) : myUser.email.length;
        let validatedEmail = "miguel.rosalesr"

        if (myWindowLength) {
            return (
                <div className="profileContainer" >

                    <div className="profileLeft">

                        <div className='profilePicInfo'>
                            <img src={Logo} className="profilePic" alt="" />
                            <h5 className="regularText nepe">{validatedEmail + ".."}</h5>
                        </div>

                        <div className='profileLeftMenu'>
                            <h5 onClick={() => { this.updateButton(1) }} className={`clickable regularText menuOptions ${buttonId == 1 ? ("selected") : ("")}`}>Your information</h5>
                            <h5 onClick={() => { this.updateButton(2) }} className={`clickable regularText menuOptions ${buttonId == 2 ? ("selected") : ("")}`}>Update plan</h5>
                            <h5 onClick={() => { this.updateButton(3) }} className={`clickable regularText menuOptions ${buttonId == 3 ? ("selected") : ("")}`}>Delete account</h5>
                        </div>
                    </div>

                    <div className="profileRight">

                        <div onClick={() => navigate('/')} className='profileRightMenu clickable'>
                            <img src={Logoxd} className="qwer" alt="" />
                        </div>

                        <div className='profileRightContent'>



                            <div className='infoContainer'>

                                <div className='pricingCardTitle titleNotMain'>
                                    <h3 className='dark-light'>Update your data</h3>
                                </div>

                                <div className="infoContainerForm">
                                    <input className="regularText modalbtn3" placeholder="new email" />
                                    <input className="regularText modalbtn3" placeholder="new password" />
                                    <input className="regularText modalbtn3" placeholder="old password" />
                                    <input className="titleNotMain pricingbtn2" type="button" value="Update" />
                                </div>
                            </div>



                            <div className='infoContainer'>
                                <div className='pricingCardTitle titleNotMain'>
                                    <h3 className='dark-light'>Premium</h3>
                                </div>

                                <h4 className='titleNotMain dark-light'>7.00$</h4>

                                <div className='pricingCardCharacteristics'>
                                    <h5 className='titleNotMain dark-light'>✅ Unlimited request per month</h5>
                                    <h5 className='titleNotMain dark-light'>✅ Unlimited images</h5>
                                    <h5 className='titleNotMain dark-light'>✅ Unlimited categories</h5>
                                    <h5 className='titleNotMain dark-light'>✅ Access to documentation</h5>
                                    <h5 className='titleNotMain dark-light'>✅ Images information</h5>
                                    <h5 className='titleNotMain dark-light'>✅ Code snipets</h5>
                                    <h5 className='titleNotMain dark-light'>❌ Commercial licence</h5>
                                </div>

                                <div className='pricingbtnCenter'>
                                    <input onClick={() => validateAccount()} className="titleNotMain pricingbtn2"
                                        type="button" value="Get premium access" />
                                </div>
                            </div>

                            <div className='infoContainer'>
                                <div className='pricingCardTitle titleNotMain'>
                                    <h3 className='dark-light'>Premium+</h3>
                                </div>

                                <h4 className='titleNotMain dark-light'>9.00$</h4>

                                <div className='pricingCardCharacteristics'>
                                    <h5 className='titleNotMain dark-light'>✅ Unlimited request per month</h5>
                                    <h5 className='titleNotMain dark-light'>✅ Unlimited images</h5>
                                    <h5 className='titleNotMain dark-light'>✅ Unlimited categories</h5>
                                    <h5 className='titleNotMain dark-light'>✅ Access to documentation</h5>
                                    <h5 className='titleNotMain dark-light'>✅ Images information</h5>
                                    <h5 className='titleNotMain dark-light'>✅ Code snipets</h5>
                                    <h5 className='titleNotMain dark-light'>✅ Commercial licence</h5>
                                </div>

                                <div className='pricingbtnCenter'>
                                    <input onClick={() => validateAccount()} className="titleNotMain pricingbtn2"
                                        type="button" value="Get premium+ access" />
                                </div>
                            </div>




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