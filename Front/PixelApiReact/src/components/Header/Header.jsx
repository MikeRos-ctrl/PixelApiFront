import './index.css';
import React, { useState, useEffect, Component } from 'react';
import Logo from '../../assets/icon4.png';
import Money from '../../assets/Icon-6.png'
import User from '../../assets/Icon-16.png'
import Doc from '../../assets/Icon-3.png'
import About from '../../assets/Icon-21.png'
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

function Header({ children, changeModalstatus, myUser }) {

    const navigate = useNavigate();

    const OpenModal = () => {

        if (myUser.ready == false) {
            changeModalstatus()
        } else {
            navigate('/profile')
        }
    }

    return (

        <header>

            <nav>
                <div className="navLeft">
                    <img src={Logo} className="qwer" alt="" />
                </div>

                <div className="navRight">

                    <Link to="pricingSection" smooth={true} duration={500}>
                        <div className="navRightCouple clickable">
                            <img src={Money} className="qwer2" alt="" />
                            <h5 className="titleNotMain">PRICING</h5>
                        </div>
                    </Link>

                    <div className="navRightCouple clickable" onClick={() => {
                        navigate('/documentation')
                    }}>
                        <img src={Doc} className="qwer2" alt="" />
                        <h5 className="titleNotMain">DOCUMENTATION</h5>
                    </div>

                    <div className="navRightCouple clickable">
                        <img src={About} className="qwer2" alt="" />
                        <h5 className="titleNotMain">ABOUT</h5>
                    </div>

                    <div className="navRightCouple clickable" onClick={() => OpenModal()}>
                        <img src={User} className="qwer2" alt="" />
                        <h5 className="titleNotMain">ACCOUNT</h5>
                    </div>
                </div>
            </nav>

            <main className="headerMain">

                <div className="mainText">

                    <h1 className="titleMain">
                        <span className="strongPinkColor">Pixel as a service</span>
                        <span className="darkColor"> is here</span>
                    </h1>

                    <h4 className="titleNotMain">
                        And remember, one pixel at a time.
                    </h4>

                    <div className="information">

                        <h5 className="titleNotMain grey-color">
                            Api to fetch awesome heart made Pixel Art.
                        </h5>

                        <h5 className="titleNotMain grey-color">
                            100+ Unique images.
                        </h5>

                        <br />

                        <div className="informationButtons">
                            <input className="button-1 titleNotMain" type="button" value="GET YOUR API KEY" />
                            <input className="button-2 titleNotMain" type="button" value="READ OUR DOC" />
                        </div>
                    </div>
                </div>

                {children}

            </main>

        </header>
    );
}

export { Header }