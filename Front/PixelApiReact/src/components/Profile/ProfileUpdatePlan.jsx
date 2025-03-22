import React, { useState, useEffect, Component } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context';
import { ApiCall } from '../../util/ApiCall';

class ProfileUpdatePlan extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    componentWillUnmount() {

    }

    render() {

        const { navigate, myUser, setMyUser } = this.props;

        return (
            <>
                <div className='showPlanContainer'>

                    <h2 className='titleNotMain'>Choose a plan</h2>

                    <div className='showPlanContainerOptions'>
                        <div className='infoContainer'>
                            <div className='pricingCardTitle titleNotMain'>
                                <h3 className='dark-light'>Premium</h3>
                            </div>

                            <h4 className='titleNotMain dark-light'>8.00$</h4>

                            <div className='pricingCardCharacteristics'>
                                <h5 className='titleNotMain dark-light'>✅ Unlimited request per month</h5>
                                <h5 className='titleNotMain dark-light'>✅ Unlimited images</h5>
                                <h5 className='titleNotMain dark-light'>✅ Unlimited categories</h5>
                                <h5 className='titleNotMain dark-light'>✅ Access to documentation</h5>
                                <h5 className='titleNotMain dark-light'>✅ Images information</h5>
                                <h5 className='titleNotMain dark-light'>✅ Code snipets</h5>
                                <h5 className='titleNotMain dark-light'>❌ Commercial licence</h5>
                            </div>

                            <div className='pricingbtnCenter-2'>
                                <input onClick={() => {
                                    setMyUser({ ...myUser, plan: 'Premium' })
                                    navigate('/checkout')
                                }} className="titleNotMain pricingbtn2" type="button" value="Select" />
                            </div>
                        </div>

                        <div className='infoContainer'>
                            <div className='pricingCardTitle titleNotMain'>
                                <h3 className='dark-light'>Premium+</h3>
                            </div>

                            <h4 className='titleNotMain dark-light'>10.00$</h4>

                            <div className='pricingCardCharacteristics'>
                                <h5 className='titleNotMain dark-light'>✅ Unlimited request per month</h5>
                                <h5 className='titleNotMain dark-light'>✅ Unlimited images</h5>
                                <h5 className='titleNotMain dark-light'>✅ Unlimited categories</h5>
                                <h5 className='titleNotMain dark-light'>✅ Access to documentation</h5>
                                <h5 className='titleNotMain dark-light'>✅ Images information</h5>
                                <h5 className='titleNotMain dark-light'>✅ Code snipets</h5>
                                <h5 className='titleNotMain dark-light'>✅ Commercial licence</h5>
                            </div>

                            <div className='pricingbtnCenter-2'>
                                <input onClick={() => {
                                    setMyUser({ ...myUser, plan: 'PremiumPlus' })
                                    navigate('/checkout')
                                }} className="titleNotMain pricingbtn2" type="button" value="Select" />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

function ProfileUpdatePlanWrapper(props) {
    const { myUser, setMyUser } = React.useContext(AppContext)
    const navigate = useNavigate();
    return < ProfileUpdatePlan {...props} myUser={myUser} navigate={navigate} setMyUser={setMyUser} />
}

export { ProfileUpdatePlanWrapper as ProfileUpdatePlan };