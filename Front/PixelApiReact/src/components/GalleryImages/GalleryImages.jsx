import React, { Component } from 'react';

class GalleryImages extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fetchedImg1: null,
            fetchedImg2: null,
            fetchedImg3: null,
            fetchedImg4: null
        }
    }

    componentDidMount() {
        this.fetchImages()
    }

    componentWillUnmount() {
    }

    fetchImages = async () => {
        const { image1, image2, image3, image4 } = this.props;

        try {
            const response1 = await fetch(image1["Image"])
            const response2 = await fetch(image2["Image"])
            const response3 = await fetch(image3["Image"])
            const response4 = await fetch(image4["Image"])

            if (response1.ok && response2.ok &&
                response3.ok && response4.ok) {

                const blob1 = await response1.blob();
                const blob2 = await response2.blob();
                const blob3 = await response3.blob();
                const blob4 = await response4.blob();

                const localImg1 = URL.createObjectURL(blob1);
                const localImg2 = URL.createObjectURL(blob2);
                const localImg3 = URL.createObjectURL(blob3);
                const localImg4 = URL.createObjectURL(blob4);

                this.setState({
                    fetchedImg1: localImg1,
                    fetchedImg2: localImg2,
                    fetchedImg3: localImg3,
                    fetchedImg4: localImg4
                })
            }
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }


    render() {
        const { image1, image2, image3, image4 } = this.props;
        const { fetchedImg1, fetchedImg2, fetchedImg3, fetchedImg4 } = this.state;

        return (
            <>
                <div className={`${fetchedImg1 != null ? ("img-container-2") : ("img-container-medium-loading")}`}>

                    {fetchedImg1 != null &&
                        <>
                            <img src={fetchedImg1} className="image2" alt="" />
                            <p className="titleNotMain">{image1["Name"]}</p>
                        </>
                    }
                </div>

                <div className={`${fetchedImg2 != null ? ("img-container-2") : ("img-container-medium-loading")}`}>

                    {fetchedImg2 != null &&
                        <>
                            <img src={fetchedImg2} className="image2" />
                            <p className="titleNotMain">{image2["Name"]}</p>
                        </>
                    }
                </div>

                <div className={`${fetchedImg3 != null ? ("img-container-2") : ("img-container-medium-loading")}`}>

                    {fetchedImg3 != null &&
                        <>
                            <img src={fetchedImg3} className="image2" />
                            <p className="titleNotMain">{image3["Name"]}</p>
                        </>
                    }
                </div>

                <div className={`${fetchedImg4 != null ? ("img-container-2") : ("img-container-medium-loading")}`}>

                    {fetchedImg4 != null &&
                        <>
                            <img src={fetchedImg4} className="image2" />
                            <p className="titleNotMain">{image4["Name"]}</p>
                        </>
                    }
                </div>
            </>
        );
    }
}

export { GalleryImages }