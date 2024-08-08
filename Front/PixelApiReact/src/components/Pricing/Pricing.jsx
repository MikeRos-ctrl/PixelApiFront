import './index.css';
import { Element } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import React, { Component } from 'react';

function Pricing({ changeModalstatus_, myUser, setMyUser }) {

    const navigate = useNavigate();
    const [buttonId, setButtonId] = React.useState(1)

    const updateButton = (newId) => {
        setButtonId(newId)
    }

    const setUserAccount = (accountType_) => {

        if (myUser.ready == false) {

            myUser.accountType = accountType_
            setMyUser(myUser)

            changeModalstatus_()
        } else {
            navigate('/profile')
        }
    }

    return (
        <div className='pricingMain'>

            <Element name="pricingSection">
                <h2 className="titleMain pricingMainBtn">
                    Choose your
                    <span className="strongPinkColor">montly</span>
                    plan
                </h2>
            </Element>

            <br />

            <div className='pricingOptions'>

                <div className='pricingCard'>
                    <div className='pricingCardTitle titleNotMain'>
                        <h3>21 day trial</h3>
                    </div>

                    <h4 className='titleNotMain'>0.00$</h4>

                    <div className='pricingCardCharacteristics'>
                        <h5 className='titleNotMain'>✅ 100 request per month</h5>
                        <h5 className='titleNotMain'>✅ Limited images</h5>
                        <h5 className='titleNotMain'>✅ Limited categories</h5>
                        <h5 className='titleNotMain'>✅ Access to documentation</h5>
                        <h5 className='titleNotMain'>❌ Images information</h5>
                        <h5 className='titleNotMain'>❌ Code snipets</h5>
                        <h5 className='titleNotMain'>❌ Commercial licence</h5>
                    </div>

                    <div className='pricingbtnCenter'>
                        <input onClick={() => setUserAccount("21DayTrial")} className="titleNotMain pricingbtn2"
                            type="button" value="Get free access" />
                    </div>
                </div>

                <div className='pricingCard'>
                    <div className='pricingCardTitle titleNotMain'>
                        <h3>Premium</h3>
                    </div>

                    <h4 className='titleNotMain'>8.00$</h4>

                    <div className='pricingCardCharacteristics'>
                        <h5 className='titleNotMain'>✅ 10,000 request per month</h5>
                        <h5 className='titleNotMain'>✅ Unlimited images</h5>
                        <h5 className='titleNotMain'>✅ Unlimited categories</h5>
                        <h5 className='titleNotMain'>✅ Access to documentation</h5>
                        <h5 className='titleNotMain'>✅ Images information</h5>
                        <h5 className='titleNotMain'>✅ Code snipets</h5>
                        <h5 className='titleNotMain'>❌ Commercial licence</h5>
                    </div>

                    <div className='pricingbtnCenter'>
                        <input onClick={() => setUserAccount("premium")} className="titleNotMain pricingbtn2"
                            type="button" value="Get premium access" />
                    </div>
                </div>

                <div className='pricingCard'>
                    <div className='pricingCardTitle titleNotMain'>
                        <h3>Premium+</h3>
                    </div>

                    <h4 className='titleNotMain'>10.00$</h4>

                    <div className='pricingCardCharacteristics'>
                        <h5 className='titleNotMain'>✅ Unlimited request per month</h5>
                        <h5 className='titleNotMain'>✅ Unlimited images</h5>
                        <h5 className='titleNotMain'>✅ Unlimited categories</h5>
                        <h5 className='titleNotMain'>✅ Access to documentation</h5>
                        <h5 className='titleNotMain'>✅ Images information</h5>
                        <h5 className='titleNotMain'>✅ Code snipets</h5>
                        <h5 className='titleNotMain'>✅ Commercial licence</h5>
                    </div>

                    <div className='pricingbtnCenter'>
                        <input onClick={() => setUserAccount("premium+")} className="titleNotMain pricingbtn2"
                            type="button" value="Get premium+ access" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Pricing };