import './index.css';
import React, { useState, useEffect, Component } from 'react';

class Gallery extends Component {

    constructor(props) {
        super(props);

        this.state = {
            myImage1: null,
            myImage2: null,
            myImage3: null,
            myImage4: null
        }
    }

    componentDidMount() {

        window.addEventListener('resize', () => {
            this.setState({
                isResponsive: (window.innerWidth <= 1000) ? true : false
            });
        });
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    componentDidUpdate(prevProps) {

        const { image1, image2, image3, image4 } = this.props;

        if (prevProps.image1 !== image1 &&
            prevProps.image2 !== image2 &&
            prevProps.image3 !== image3 &&
            prevProps.image4 !== image4
        ) {
            this.setState({
                myImage1: image1,
                myImage2: image2,
                myImage3: image3,
                myImage4: image4,
            });
        }
    }

    xd(category) {
        alert("xd")
    }

    render() {
        const { myImage1, myImage2, myImage3, myImage4 } = this.state;
        // const { listByCategory } = this.props;

        return (

            <section>

                <div className="section-tittle">

                    <h2 className="titleMain">
                        <span className="darkColor">Explore our</span>
                        <span className="strongPinkColor"> art gallery</span>
                    </h2>

                    <div className="categories">
                        <input onClick={() => this.xd()} className="button-3 titleNotMain" type="button" value="ALL" />
                        <input className="button-4 titleNotMain" type="button" value="CHARACTER" />
                        <input className="button-4 titleNotMain" type="button" value="ANIMAL" />
                        <input className="button-4 titleNotMain" type="button" value="LANDSCAPE" />
                        <input className="button-4 titleNotMain" type="button" value="BUILDING" />
                        {/* <h5>reload icon</h5> */}
                    </div>
                </div>

                <div className="img-container-gallery">

                    {myImage1 ? (
                        <div className="img-container-2">
                            <img src={myImage1["Image"]} className="image2" alt="" />
                            <p className="titleNotMain">{myImage1["Description"]}</p>
                        </div>
                    ) : (
                        <div className="img-container-medium-loading"></div>
                    )}
                    {myImage2 ? (
                        <div className="img-container-2">
                            <img src={myImage2["Image"]} className="image2" alt="" />
                            <p className="titleNotMain">{myImage2["Description"]}</p>
                        </div>
                    ) : (
                        <div className="img-container-medium-loading"></div>
                    )}
                    {myImage3 ? (
                        <div className="img-container-2">
                            <img src={myImage3["Image"]} className="image2" alt="" />
                            <p className="titleNotMain">{myImage3["Description"]}</p>
                        </div>
                    ) : (
                        <div className="img-container-medium-loading"></div>
                    )}
                    {myImage4 ? (
                        <div className="img-container-2">
                            <img src={myImage4["Image"]} className="image2" alt="" />
                            <p className="titleNotMain">{myImage4["Description"]}</p>
                        </div>
                    ) : (
                        <div className="img-container-medium-loading"></div>
                    )}

                </div>
            </section>
        );
    }
}

export { Gallery }