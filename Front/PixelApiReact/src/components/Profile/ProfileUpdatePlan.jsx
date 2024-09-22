import React, { useState, useEffect, Component } from 'react';
import { UsePixelApi } from '../../util/UsePixelApi';
const { PaypalOrder } = UsePixelApi()

class ProfileUpdatePlan extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { myUser } = this.props;

        window.paypal.Buttons({
            createSubscription: function (data, actions) {
                return actions.subscription.create({
                    'plan_id': 'P-5GX12132HF6599748M26AU6Y'
                });
            },
            onApprove: function (data, actions) {

                PaypalOrder({
                    orderId: data.orderID,
                    suscriptionId: data.subscriptionID,
                    clientId: myUser.id,
                    plan: "Premium"
                }).then(result => {
                    console.log("xd")
                })
            }
        }).render('#paypal-button-container');
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <>
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

                        {/* <input onClick={() => validateAccount()} className="titleNotMain pricingbtn2"
                            type="button" value="Get premium access" /> */}

                        <div id="paypal-button-container"></div>

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

                        {/* <input onClick={() => validateAccount()} className="titleNotMain pricingbtn2"
                            type="button" value="Get premium+ access" /> */}
                    </div>
                </div>
            </>
        )
    }
}

export { ProfileUpdatePlan };