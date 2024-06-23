import React, { useState, useEffect, Component } from 'react';
import { IoReorderThree } from "react-icons/io5";

class HeaderImageLoading extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="img-container-big-loading"></div>
        );
    }
}

export { HeaderImageLoading }