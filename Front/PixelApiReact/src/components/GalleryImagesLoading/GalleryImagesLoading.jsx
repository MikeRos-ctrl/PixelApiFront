import React, { useState, useEffect, Component } from 'react';

class GalleryImagesLoading extends Component {

    constructor(props) {
        super(props);
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