import React, {  Component } from 'react';

class GalleryImages extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentWillUnmount() {
    }

    render() {
        const { image1, image2, image3, image4 } = this.props;

        return (
            <>
                <div className="img-container-2">
                    <img src={image1["Image"]} className="image2" alt="" />
                    <p className="titleNotMain">{image1["Description"]}</p>
                </div>

                <div className="img-container-2">
                    <img src={image2["Image"]} className="image2" alt="" />
                    <p className="titleNotMain">{image2["Description"]}</p>
                </div>

                <div className="img-container-2">
                    <img src={image3["Image"]} className="image2" alt="" />
                    <p className="titleNotMain">{image3["Description"]}</p>
                </div>

                <div className="img-container-2">
                    <img src={image4["Image"]} className="image2" alt="" />
                    <p className="titleNotMain">{image4["Description"]}</p>
                </div>
            </>
        );
    }
}

export { GalleryImages }