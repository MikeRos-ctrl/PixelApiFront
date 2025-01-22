import React, { Component } from 'react';
import { AppContext } from '../../context';

class GalleryImages extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    componentDidUpdate(prevProps, prevState) {
        const { myImages } = this.props;


        // const { ready1, ready2, ready3, ready4, } = this.state;
        // const { setRefreshGallery } = this.props;

        // if (ready1 && ready2 && ready3 && ready4 &&
        //     (!prevState.ready1 || !prevState.ready2 || !prevState.ready3 || !prevState.ready4)) {
        //     setRefreshGallery(true)
        // }
    }

    render() {
        const { myImages } = this.props;

        return (
            <>
                <div className={myImages[1] ? "img-container-2" : "img-container-medium-loading"}>
                    {myImages[1] && (
                        <>
                            <img src={myImages[1]["Image"]} className="image2" alt="" />
                            {myImages[1] && <p className="titleNotMain">{myImages[1]["Name"]}</p>}
                        </>
                    )}
                </div>

                <div className={myImages[2] ? "img-container-2" : "img-container-medium-loading"}>
                    {myImages[2] && (
                        <>
                            <img src={myImages[2]["Image"]} className="image2" alt="" />
                            {myImages[2] && <p className="titleNotMain">{myImages[2].Name}</p>}
                        </>
                    )}
                </div>

                <div className={myImages[3] ? "img-container-2" : "img-container-medium-loading"}>
                    {myImages[3] && (
                        <>
                            <img src={myImages[3]["Image"]} className="image2" alt="" />
                            {myImages[3] && <p className="titleNotMain">{myImages[3].Name}</p>}
                        </>
                    )}
                </div>

                <div className={myImages[4] ? "img-container-2" : "img-container-medium-loading"}>
                    {myImages[4] && (
                        <>
                            <img src={myImages[4]["Image"]} className="image2" alt="" />
                            {myImages[4] && <p className="titleNotMain">{myImages[4].Name}</p>}
                        </>
                    )}
                </div>
            </>
        );
    }
}

function GalleryImagesWrapper(props) {
    const { myImages, setRefreshGallery } = React.useContext(AppContext)
    return <GalleryImages
        {...props}
        myImages={myImages}
        setRefreshGallery={setRefreshGallery}
    />
}

export { GalleryImagesWrapper as GalleryImages }