import React, { useState, useEffect, Component } from 'react';
import { HeaderImageLoading } from '../HeaderImageLoading/HeaderImageLoading';

class HeaderImage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fetchedImg: null
        }
    }

    componentDidMount() {
        this.fetchImage()
    }

    componentWillUnmount() {
        const { fetchedImg } = this.state;

        if (fetchedImg) {
            URL.revokeObjectURL(fetchedImg);
        }
    }

    fetchImage = async () => {
        const { image } = this.props;

        try {
            const response = await fetch(image["Image"])

            if (response.ok) {
                const blob = await response.blob();
                const localImg = URL.createObjectURL(blob);
                this.setState({ fetchedImg: localImg })
            }
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }

    render() {
        const { image } = this.props;
        const { fetchedImg } = this.state;

        return (
            <React.Fragment>

                <div className={`${fetchedImg != null ? ("img-container-big") : ("img-container-big-loading")}`}>

                    {fetchedImg != null &&
                        <>
                            <p className="titleNotMain">Explore our art gallery ❤️</p>
                            <img src={fetchedImg} className="image" alt="" />
                            <h5 className="titleNotMain white-color">{image["Name"]}</h5>
                        </>
                    }
                </div>
            </React.Fragment>
        );
    }
}

export { HeaderImage }