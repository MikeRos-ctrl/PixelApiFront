import './index.css';
import React, { useState, useEffect, Component } from 'react';
import { AppContext } from '../../context';
import { ApiCall } from '../../util/ApiCall';
import { FetchImgLogic } from '../../util/FetchImgLogic';
const { listByCategory } = ApiCall()
const { fetchImages } = FetchImgLogic()


class Gallery extends Component {

    constructor(props) {
        super(props);

        this.state = {
            buttonId: 1,
            available: true
        }
    }

    componentDidMount() {

    }

    componentWillUnmount() {
    }

    updateButton = (newId) => {
        this.setState({
            buttonId: newId,
        })
    }

    listByCategory = (category) => {
        const { setRefreshGallery, myImages, setMyImages } = this.props;

        setRefreshGallery(false)
        setMyImages(myImages.slice(0, 1))

        listByCategory(category, myImages[0]["ImageId"]).then(res => {
            fetchImages(res).then(res => {
                setMyImages((myImages.slice(0, 1)).concat(res["fetchedGallery"]))
                setRefreshGallery(true)
            })
        })
            .catch(error => {
                console.error("I've got a mistake: ", error);
            });
    }

    render() {
        const { children, refreshGallery } = this.props;
        const { buttonId } = this.state;

        return (
            <section>
                <div className="section-tittle">
                    <h2 className="titleMain">
                        <span className="darkColor">Explore our</span>
                        <span className="strongPinkColor"> art gallery</span>
                    </h2>

                    <div className="categories">
                        <input onClick={() => { this.listByCategory(8); this.updateButton(1) }} className={`titleNotMain ${buttonId == 1 ? "button-3" : "button-4"} ${!refreshGallery ? "cursor-blocked" : ""} `} type="button" value="ALL" />
                        <input onClick={() => { this.listByCategory(1); this.updateButton(2) }} className={`titleNotMain ${buttonId == 2 ? "button-3" : "button-4"} ${!refreshGallery ? "cursor-blocked" : ""}`} type="button" value="BUILDING" />
                        <input onClick={() => { this.listByCategory(2); this.updateButton(3) }} className={`titleNotMain ${buttonId == 3 ? ("button-3") : ("button-4")} ${!refreshGallery ? "cursor-blocked" : ""}`} type="button" value="FANTASY" />
                        <input onClick={() => { this.listByCategory(3); this.updateButton(4) }} className={`titleNotMain ${buttonId == 4 ? ("button-3") : ("button-4")} ${!refreshGallery ? "cursor-blocked" : ""}`} type="button" value="NATURE" />
                        <input onClick={() => { this.listByCategory(4); this.updateButton(5) }} className={`titleNotMain ${buttonId == 5 ? ("button-3") : ("button-4")} ${!refreshGallery ? "cursor-blocked" : ""}`} type="button" value="CUTE" />
                        <input onClick={() => { this.listByCategory(5); this.updateButton(6) }} className={`titleNotMain ${buttonId == 6 ? ("button-3") : ("button-4")} ${!refreshGallery ? "cursor-blocked" : ""}`} type="button" value="ANIMAL" />
                        <input onClick={() => { this.listByCategory(6); this.updateButton(7) }} className={`titleNotMain ${buttonId == 7 ? ("button-3") : ("button-4")} ${!refreshGallery ? "cursor-blocked" : ""}`} type="button" value="CHARACTER" />
                        <input onClick={() => { this.listByCategory(7); this.updateButton(8) }} className={`titleNotMain ${buttonId == 8 ? ("button-3") : ("button-4")} ${!refreshGallery ? "cursor-blocked" : ""}`} type="button" value="LANDSCAPE" />
                    </div>
                </div>

                <div className="img-container-gallery">
                    {children}
                </div>
            </section>
        );
    }
}

function GalleryWrapper(props) {
    const { refreshGallery, setRefreshGallery, myImages, setMyImages } = React.useContext(AppContext)
    return <Gallery {...props} myImages={myImages} setMyImages={setMyImages} refreshGallery={refreshGallery} setRefreshGallery={setRefreshGallery} />

}

export { GalleryWrapper as Gallery }