import './index.css';
import { Element } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import React from 'react';

function Pricing({ changeModalstatus, myUser, setModalIndex, setMyUserPayment }) {

    const navigate = useNavigate();

    const OpenModal = (plan) => {

        if (myUser.ready == false) {
            setMyUserPayment(plan)
            changeModalstatus()
            setModalIndex(5)
        } else {
            navigate('/profile')
        }
    }

    return (
        <div className='pricingMain'>

            <div name="pricingSection">
                <h2 className="titleMain pricingMainBtn">
                    Choose your
                    <span className="strongPinkColor">montly</span>
                    plan
                </h2>
            </div>

            <br />

            <div className='pricingOptions'>

                <div className='pricingCard'>
                    <div className='pricingCardTitle titleNotMain'>
                        <h3>Premium</h3>
                    </div>

                    <h4 className='titleNotMain'>8.00$</h4>

                    <div className='pricingCardCharacteristics'>
                        <h5 className='titleNotMain'>✅ Unlimited request per month</h5>
                        <h5 className='titleNotMain'>✅ Unlimited images</h5>
                        <h5 className='titleNotMain'>✅ Unlimited categories</h5>
                        <h5 className='titleNotMain'>✅ Access to documentation</h5>
                        <h5 className='titleNotMain'>✅ Images information</h5>
                        <h5 className='titleNotMain'>✅ Code snipets</h5>
                        <h5 className='titleNotMain'>❌ Commercial licence</h5>
                    </div>

                    <div className='pricingbtnCenter'>
                        <input onClick={() => OpenModal("Premium")} className="titleNotMain pricingbtn2"
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
                        <input onClick={() => OpenModal("Premium+")} className="titleNotMain pricingbtn2"
                            type="button" value="Get premium+ access" />
                    </div>
                </div>

            </div>
        </div>
    );
}

export { Pricing };