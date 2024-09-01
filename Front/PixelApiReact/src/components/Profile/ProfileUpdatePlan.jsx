import React from "react";


function ProfileUpdatePlan({ }) {
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

        </>
    )
}

export { ProfileUpdatePlan };