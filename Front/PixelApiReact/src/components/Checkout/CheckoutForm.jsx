import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js"
import React, { useEffect, useRef, Component } from 'react';

function CheckoutForm() {
    const stripe = useStripe()
    const elements = useElements()
    const [message, setMessage] = React.useState(null);
    const [isProcessing, setIsProcessing] = React.useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsProcessing(true);

        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `http://localhost:5173/`,
            },
        });

        if (error.type === "card_error" || error.type === "validation_error") {
            setMessage(error.message);
        } else {
            setMessage("An unexpected error occured.");
        }

        console.log(paymentIntent)

        setIsProcessing(false);
    };

    return (
        <>
            <form id="payment-form" onSubmit={handleSubmit}>
                <PaymentElement id="payment-element" />
                <button disabled={isProcessing || !stripe || !elements} className="payButton titleNotMain">
                    <span id="button-text">
                        {isProcessing ? "Processing ... " : "Pay now"}
                    </span>
                </button>

                {message && <div id="payment-message">{message}</div>}
            </form>
        </>
    )

}

export default CheckoutForm;