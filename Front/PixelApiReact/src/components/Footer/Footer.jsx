import './index.css';
import React, { Component } from 'react';

class Footer extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {

    }

    componentWillUnmount() {
    }


    render() {

        return (
            <footer>
                <div className='footerContainer'>
                    <div className='twiced'>
                        <div className='footerAbove'>
                            {/* <div>
                                <h4 className='titleNotMain'>Company</h4>
                                <h5 className='regularText'>About us</h5>
                            </div> */}

                            <div>
                                <div>
                                    <h4 className='titleNotMain'>Location</h4>
                                    <h5 className='regularText'>Monterrey, Nuevo Leon, Mexico</h5>
                                </div>
                                <br></br>
                                <br></br>
                                <div>
                                    <h4 className='titleNotMain'>Technical support</h4>
                                    <h5 className='regularText'>princemike@outlook.es</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='footerBelow'>
                        <h5 className='titleNotMain'>© 2025 All rights reserved.</h5>
                    </div>
                </div>
            </footer>
        );
    }
}

export { Footer }