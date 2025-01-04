import React, { Component } from 'react';

class GalleryImages extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ready1: false,
            ready2: false,
            ready3: false,
            ready4: false,
        }
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    componentDidUpdate() {
  
    }

    render() {
        const { image1, image2, image3, image4 } = this.props;
        const { ready1, ready2, ready3, ready4, } = this.state;

        return (
            <>
                <div className={`${ready1 ? ("img-container-2") : ("img-container-medium-loading")}`}>
                    {image1 &&
                        <img onLoad={() => { this.setState({ ready1: true }) }} src={image1["Image"]} className="image2" alt="" />
                    }
                    {ready1 &&
                        <p className="titleNotMain">{image1["Name"]}</p>
                    }
                </div>

                <div className={`${ready2 ? ("img-container-2") : ("img-container-medium-loading")}`}>
                    {image2 &&
                        <img onLoad={() => { this.setState({ ready2: true }) }} src={image2["Image"]} className="image2" alt="" />
                    }
                    {ready2 &&
                        <p className="titleNotMain">{image2["Name"]}</p>
                    }
                </div>

                <div className={`${ready3 ? ("img-container-2") : ("img-container-medium-loading")}`}>
                    {image3 &&
                        <img onLoad={() => { this.setState({ ready3: true }) }} src={image3["Image"]} className="image2" alt="" />
                    }
                    {ready3 &&
                        <p className="titleNotMain">{image3["Name"]}</p>
                    }
                </div>

                <div className={`${ready4 ? ("img-container-2") : ("img-container-medium-loading")}`}>
                    {image4 &&
                        <img onLoad={() => { this.setState({ ready4: true }) }} src={image4["Image"]} className="image2" alt="" />
                    }
                    {ready4 &&
                        <p className="titleNotMain">{image4["Name"]}</p>
                    }
                </div>
            </>
        );
    }
}

export { GalleryImages }