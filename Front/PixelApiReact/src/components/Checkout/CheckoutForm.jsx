import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js"
import React, { useEffect } from 'react';
import { ApiCall } from "../../util/ApiCall";
import Swal from 'sweetalert2'
import { AppContext } from '../../context';
import { parseISO, format } from 'date-fns';

function CheckoutForm({ navigate, setReturnFlag, plan, email }) {
    const stripe = useStripe()
    const elements = useElements()
    const [error, setError] = React.useState(false)
    const [errorText, setErrorText] = React.useState(false)
    const [isProcessing, setIsProcessing] = React.useState(false);
    const { CreateStripeSubscription } = ApiCall()
    const { myUser, setMyUser } = React.useContext(AppContext)

    useEffect(() => {
        setReturnFlag()
    }, [isProcessing]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsProcessing(true);
        setReturnFlag()

        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            confirmParams: {
            },
            redirect: 'if_required'
        });

        if (error) {
            if (error.type === "card_error" || error.type === "validation_error") {
                setError(true);
                setErrorText(error.message);
                setTimeout(() => {
                    setError(false);
                }, 3000);
            } else {
                setError(true);
                setErrorText("An unexpected error occurred.");
                setTimeout(() => {
                    setError(false);
                }, 3000);
            }
        } else if (paymentIntent && paymentIntent.status === "succeeded") {

            console.log(paymentIntent)
            console.log(paymentIntent.id)


            CreateStripeSubscription({
                stripeSubscriptionId: paymentIntent.id,
                email: email,
                planTypeId: myUser.tempPlan
            }).then(res => {

                let startDate = parseISO(res.response.startDay)
                let endDate = parseISO(res.response.endDay)

                setMyUser({
                    ...myUser,
                    plan: myUser.tempPlan,
                    startDate: format(startDate, "yyyy-MM-dd"),
                    endDate: format(endDate, "yyyy-MM-dd"),
                    activeMonts: res.response.activeMonths
                })

                Swal.fire({
                    icon: 'success',
                    title: 'Payment was confirmed',
                    showConfirmButton: true,
                }).then(res => {
                    navigate('/')
                })
            })
        }

        setIsProcessing(false);
    };

    return (
        <>
            <form id="payment-form" onSubmit={handleSubmit}>
                <PaymentElement id="payment-element" />
                <button disabled={isProcessing || !stripe || !elements} className="payButton titleNotMain">
                    <span id="button-text">
                        {isProcessing ? "Processing" : "Pay now"}
                    </span>
                </button>
            </form>
        </>
    )

}

export default CheckoutForm;