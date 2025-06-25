import './index.css';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { AppContext } from '../../context';

function Pricing() {

    const navigate = useNavigate();
    const { myUser, setMyUser, setMyModal, myModal, setPage } = React.useContext(AppContext)

    const OpenModal = (plan) => {

        if (myUser.ready == false) {
            setMyUser({ ...myUser, plan: plan })
            setMyModal({ ...myModal, open: !myModal.open })
        } else {
            setPage(2)
        }
    }

    return (
        <div className='pricingMain'>

            <div id="pricingSection">
                <h2 className="titleMain pricingMainBtn">
                    Choose your
                    <span className="strongPinkColor">montly</span>
                    plan
                </h2>
            </div>

            <br />

            <div className='pricingOptions'>

                <div className='pricingCard'>

                    <h3 className='pricingCardTitle titleNotMain'>Free</h3>
                    <h4 className='titleNotMain'>0.00$</h4>

                    <div className='pricingCardCharacteristics'>
                        <h5 className='titleNotMain'>✅ 40 request per day</h5>
                        <h5 className='titleNotMain'>✅ Limited images</h5>
                        <h5 className='titleNotMain'>✅ Limited categories</h5>
                        <h5 className='titleNotMain'>✅ Images information</h5>
                    </div>

                    <div className='pricingbtnCenter'>
                        <input onClick={() => OpenModal("Premium")} className="titleNotMain pricingbtn2"
                            type="button" value="Get free access" />
                    </div>
                </div>

                <div className='pricingCard'>
                    <div className='pricingCardTitle titleNotMain'>
                        <h3>Premium</h3>
                    </div>

                    <h4 className='titleNotMain'>7.00$</h4>

                    <div className='pricingCardCharacteristics'>
                        <h5 className='titleNotMain'>✅ Unlimited request</h5>
                        <h5 className='titleNotMain'>✅ Unlimited images</h5>
                        <h5 className='titleNotMain'>✅ Unlimited categories</h5>
                        <h5 className='titleNotMain'>✅ Images information</h5>
                        <h5 className='titleNotMain'>✅ Commercial licence</h5>
                        <h5 className='titleNotMain'>✅ Support</h5>
                    </div>

                    <div className='pricingbtnCenter'>
                        <input onClick={() => OpenModal("Premium+")} className="titleNotMain pricingbtn2"
                            type="button" value="Get premium access" />
                    </div>
                </div>

            </div>
        </div>
    );
}

export { Pricing };