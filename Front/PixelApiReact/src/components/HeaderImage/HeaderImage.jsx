import React, { useState, useEffect, Component } from 'react';
import { IoReorderThree } from "react-icons/io5";

class HeaderImage extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    componentDidMount() {

    }

    render() {
        const { image } = this.props;

        return (
            <div className="img-container-big">
                <p className="titleNotMain white-color">{image["Description"]}</p>
                <img src={image["Image"]} className="image" alt="" />
                <p className="regularText">Explore our art gallery ❤️</p>
            </div>
        );
    }
}

export { HeaderImage }