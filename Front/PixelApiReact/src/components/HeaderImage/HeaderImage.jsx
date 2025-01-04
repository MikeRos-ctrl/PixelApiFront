import React, { useState, useEffect, Component } from 'react';
import 'animate.css'
import { HeaderImageLoading } from '../HeaderImageLoading/HeaderImageLoading';

class HeaderImage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ready: false
        }
    }

    componentDidMount() {
    }

    componentWillUnmount() {

    }

    render() {
        const { image } = this.props;
        const { ready } = this.state;

        return (
            <React.Fragment>
                <div className={`${ready ? ("legendaryCard animate__animated animate__fadeIn") : ("img-container-big-loading")}`}>
                    {ready &&
                        <h5 className="titleNotMain white-color">{image["Name"]}</h5>
                    }
                    {image &&
                        <img onLoad={() => { this.setState({ ready: true }) }} src={image["Image"]} className="image" alt="" />
                    }
                    {ready &&
                        <p className="titleNotMain">ThePixelApi greets you ❤️</p>
                    }
                </div>
            </React.Fragment>
        );
    }
}

export { HeaderImage }