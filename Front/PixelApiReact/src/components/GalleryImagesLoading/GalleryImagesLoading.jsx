import React, { useState, useEffect, Component } from 'react';

class GalleryImagesLoading extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <>
                <div className="img-container-medium-loading"></div>
                <div className="img-container-medium-loading"></div>
                <div className="img-container-medium-loading"></div>
                <div className="img-container-medium-loading"></div>
            </>
        );
    }
}

export { GalleryImagesLoading }