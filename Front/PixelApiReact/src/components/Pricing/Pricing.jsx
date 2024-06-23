import './index.css';
import React, { Component } from 'react';

class Pricing extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {

        const { changeModalstatus_ } = this.props;

        return (
            <div className='pricingMain'>

                <h2 className="titleMain">
                    Chose your plan
                </h2>

                <br />

                <div className="pricingMainBtn">
                    <input className="titleNotMain pricingbtn pinkbtn" type="button" value="Monthly" />
                    <input className="titleNotMain pricingbtn" type="button" value="Yearly" />
                </div>

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
                            {/* <h5 className='titleNotMain'>❌ Limited Tailored pixel art</h5> */}
                            <h5 className='titleNotMain'>❌ Commercial licence</h5>
                        </div>

                        <div className='pricingbtnCenter'>
                            <input onClick={() => changeModalstatus_()} className="titleNotMain pricingbtn2" type="button" value="Get free access" />
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
                            {/* <h5 className='titleNotMain'>❌ Limited Tailored pixel art</h5> */}
                            <h5 className='titleNotMain'>❌ Commercial licence</h5>
                        </div>

                        <div className='pricingbtnCenter'>
                            <input onClick={() => changeModalstatus_()} className="titleNotMain pricingbtn2" type="button" value="Get premium access" />
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
                            {/* <h5 className='titleNotMain'>✅ Limited Tailored pixel art</h5> */}
                            <h5 className='titleNotMain'>✅ Commercial licence</h5>
                        </div>

                        <div className='pricingbtnCenter'>
                            <input onClick={() => changeModalstatus_()} className="titleNotMain pricingbtn2" type="button" value="Get premium+ access" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { Pricing };
