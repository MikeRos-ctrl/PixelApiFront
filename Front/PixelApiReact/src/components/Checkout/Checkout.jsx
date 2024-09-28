import React, { useEffect, useRef, Component } from 'react';
import './index.css';
import Logo from '../../assets/icon4.png';
import arrow from '../../assets/Icon-11.png';
import CheckoutForm from './CheckoutForm';
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import Stripe from 'stripe';

class Checkout extends Component {

    constructor(props) {
        super(props);

        this.state = {
            stripePublic: "pk_test_51Q1zOEFPhxiQYA140A2eGK8gGL66iEfViDDqJIubGGGWrXeoWOHpPPOAXB8QigbnZ7Y24fQjSRuMVwWKwOni9lsO00j1hnkAd0",
            stripeSecret: "sk_test_51Q1zOEFPhxiQYA14uOzEc2TSF1NAvvggrFAex14QHUj6V6OJRlSDI9cFAdWbsLLZZUgTUIqI0CZlgotO4sxcCGPy00rF6RBw8I",
            stripePromise: null,
            clientSecret: null
        }
    }

    componentDidMount() {
        const { stripePublic, stripeSecret } = this.state
        this.setState({ stripePromise: loadStripe(stripePublic) })
        const stripe = new Stripe(stripeSecret);

        stripe.customers.create({
            email: "example@gmail.com"
        }).then(res => {

            stripe.subscriptions.create({
                customer: res.id,
                items: [{
                    price: "price_1Q20xgFPhxiQYA14Cqvfu7GL",
                }],
                payment_behavior: 'default_incomplete',
                payment_settings: { save_default_payment_method: 'on_subscription' },
                expand: ['latest_invoice.payment_intent'],
            }).then(res => {
                this.setState({ clientSecret: res.latest_invoice.payment_intent.client_secret })
            });
        });
    }

    componentDidUpdate() { }

    render() {

        const { stripePromise, clientSecret } = this.state

        return (
            <div className="checkout" >

                <div className="checkoutLeft">

                    <div className="checkoutLeftSmartConatiner">

                        <div className="relative">
                            <img src={arrow} className="qwer2 absolute" alt="" />
                            <img src={Logo} className="qwer" alt="" />
                        </div>

                        <div className="checkoutLeftInformation">
                            <h5 className="regularText">
                                ThePixelApi - Premium suscription
                            </h5>

                            <div className="checkoutLeftInformation2">
                                <h3 className="titleNotMain">
                                    8,00 US$
                                </h3>
                                <h5 className="regularText">
                                    per month
                                </h5>
                            </div>
                        </div>

                        <div className="checkoutLeftReceiptContainer">
                            <div className="checkoutLeftReceipt">
                                <h5 className="titleNotMain">Premium Plan</h5>
                                <h5 className="titleNotMain">8,00 US$</h5>
                            </div>

                            <div className="checkoutLeftReceipt">
                                <h5 className="titleNotMain">Taxes</h5>
                                <h5 className="titleNotMain grey-color">0,00 US$</h5>
                            </div>
                        </div>

                        <div className="checkoutLeftReceipt2">
                            <h5 className="titleNotMain">8,00 US$</h5>
                        </div>

                    </div>
                </div>


                <div className="checkoutRight">
                    {stripePromise && clientSecret && (
                        <Elements stripe={stripePromise} options={{ clientSecret }}>
                            <CheckoutForm />
                        </Elements>
                    )}
                </div>

            </div>
        )
    }
}
export { Checkout }