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
            </header>
        )
    }
}

export { HeaderLoading }