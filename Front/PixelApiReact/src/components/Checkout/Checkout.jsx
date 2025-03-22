import React, { useEffect, useState } from 'react';
import './index.css';
import Logo from '../../assets/icon4.png';
import arrow from '../../assets/Icon-11.png';
import CheckoutForm from './CheckoutForm';
import { useLocation, useNavigate } from 'react-router-dom';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Stripe from 'stripe';
import { AppContext } from '../../context';
import { ApiCall } from '../../util/ApiCall';
const { StripeCredentials } = ApiCall()

class Checkout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            stripePublic: "",
            stripeSecret: "",
            stripePromise: null,
            clientSecret: null,
            returnFlag: false
        };
    }

    async componentDidMount() {
        const { myUser } = this.props;
        console.log(myUser.plan)

        try {

            /*
            *   Get StripeCredentials in Backend
             */
            let stripeConfig = await StripeCredentials(myUser.plan);
            let stripe = new Stripe(stripeConfig.response.STRIPE_SECRET);
            let createdUser = await stripe.customers.create({ email: myUser.email })

            stripe.subscriptions.create({
                customer: createdUser.id,
                items: [{
                    price: stripeConfig.response.STRIPE_PLAN_CODE,
                }],
                payment_behavior: 'default_incomplete',
                payment_settings: { save_default_payment_method: 'on_subscription' },
                expand: ['latest_invoice.payment_intent'],
            }).then(res => {
                this.setState({
                    clientSecret: res.latest_invoice.payment_intent.client_secret,
                    stripePromise: loadStripe(stripeConfig.response.STRIPE_PUBLIC),
                });
            });
        } catch (error) {
            console.error('Error creating subscription: ', error);
        }
    }

    componentWillUnmount() {
        const { setCheckOutFlag } = this.props;
        // setCheckOutFlag()
    }

    setReturnFlag = () => {
        this.setState({
            returnFlag: !this.state.returnFlag
        })
    }

    render() {
        const { stripePromise, clientSecret, returnFlag } = this.state;
        const { navigate, price, myUser } = this.props;

        return (
            <>

                <div className="checkout">

                    <div className="checkoutLeft">

                        <div className="checkoutLeftSmartConatiner">
                            <div className="relative clickable" onClick={() => returnFlag ? navigate('/profile') : null}>
                                <img src={arrow} className="qwer2 absolute" alt="" />
                                <img src={Logo} className="qwer" alt="" />
                            </div>

                            <div className="checkoutLeftInformation">
                                <h5 className="regularText">{myUser.plan} subscription</h5>
                                <div className="checkoutLeftInformation2">
                                    <h3 className="titleNotMain">{price}</h3>
                                    <h5 className="regularText">per month</h5>
                                </div>
                            </div>

                            <div className="checkoutLeftReceiptContainer">
                                <div className="checkoutLeftReceipt">
                                    <h5 className="titleNotMain">Premium Plan</h5>
                                    <h5 className="titleNotMain">{price}</h5>
                                </div>

                                <div className="checkoutLeftReceipt">
                                    <h5 className="titleNotMain">Taxes</h5>
                                    <h5 className="titleNotMain grey-color">0,00 US$</h5>
                                </div>
                            </div>

                            <div className="checkoutLeftReceipt2">
                                <h5 className="titleNotMain">{price}</h5>
                            </div>
                        </div>
                    </div>

                    <div className="checkoutRight">
                        <div className='checkoutRightContainer'>
                            {stripePromise && clientSecret && (
                                <Elements stripe={stripePromise} options={{ clientSecret }}>
                                    <CheckoutForm navigate={navigate} setReturnFlag={this.setReturnFlag} plan={myUser.plan} email={myUser.email} />
                                </Elements>
                            )}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

function CheckoutWithRouter(props) {
    const { myUser } = React.useContext(AppContext)
    const navigate = useNavigate();
    let price = myUser.plan == "Premium" ? "8,00 USD" : "10,00 USD"
    return <Checkout {...props} navigate={navigate} price={price} myUser={myUser} />;
}

export { CheckoutWithRouter as Checkout };