import React, { useState, useEffect, Component } from 'react';

class HeaderLoading extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isResponsive: (window.innerWidth <= 850) ? true : false,
            showMenu: false
        }
    }

    componentDidMount() {

        window.addEventListener('resize', () => {
            this.setState({
                isResponsive: (window.innerWidth <= 850) ? true : false,
                showMenu: false
            });
        });
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    render() {

        const { isResponsive, showMenu } = this.state;


        return (
            <header>

                <nav>
                    <div className="navLeft">
                        <h3 className="titleNotMain">Pixel Api</h3>
                    </div>


                    {!isResponsive && (
                        <div className="navRight">
                            <h5 className="regularText">PRICING</h5>
                            <h5 className="regularText">DOCUMENTATION</h5>
                            <h5 className="regularText">ABOUT</h5>
                            <h5 className="regularText">MY ACCOUNT</h5>
                        </div>
                    )}

                    {isResponsive && (
                        <div className="navRight" onClick={() => {
                            this.setState({
                                showMenu: !showMenu
                            });
                        }}>
                            <h5 className="regularText clickable">|||</h5>
                        </div>
                    )}
                </nav>
                {/* 
                {showMenu && (
                    <div className="showMenu">
                        <h5 className="titleNotMain">PRICING</h5>
                        <h5 className="titleNotMain">DOCUMENTATION</h5>
                        <h5 className="titleNotMain">ABOUT</h5>
                        <h5 className="titleNotMain">MY ACCOUNT</h5>
                    </div>
                )} */}

                {/* <main className={`${isResponsive ? ("headerMainResponsive") : ("headerMain")}`}>

                    <div className="mainText">

                        <h1 className="titleMain">
                            <span className="strongPinkColor">Pixel as a service</span>
                            <span className="darkColor"> is here</span>
                        </h1>

                        <h5 className="titleNotMain ">
                            And remember, one pixel at a time.
                        </h5>

                        <div className="information">

                            <h5 className="titleNotMain grey-color">
                                Api to retreive awesome heart made Pixel Art.
                            </h5>

                            <h5 className="titleNotMain grey-color">
                                100+ Unique images.
                            </h5>

                            <br />

                            <div className={`${isResponsive ? ("informationButtonsResponsive") : ("informationButtons")}`}>
                                <input className="button-1 titleNotMain" type="button" value="GET YOUR API KEY" />
                                <input className="button-2 titleNotMain" type="button" value="READ OUR DOC" />
                            </div>
                        </div>
                    </div>

                    <div className="img-container">
                        <p className="titleNotMain white-color">{image["Description"]}</p>

                        <img src={image["Image"]} className="image" alt="" />

                        <p className="regularText">Explore our art gallery ❤️</p>
                    </div>

                </main> */}

            </header>
        )
    }
}

export { HeaderLoading }