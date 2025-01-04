import './index.css';
import React, { useState, useEffect, Component } from 'react';

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

    render() {
        const { children, listByCategory_, refreshGallery } = this.props;
        const { buttonId } = this.state;

        return (
            <section>
                <div className="section-tittle">
                    <h2 className="titleMain">
                        <span className="darkColor">Explore our</span>
                        <span className="strongPinkColor"> art gallery</span>
                    </h2>

                    <div className="categories">
                        <input onClick={() => { listByCategory_(8); this.updateButton(1) }} className={`titleNotMain ${buttonId == 1 ? "button-3" : "button-4"} ${!refreshGallery ? "cursor-blocked" : ""} `} type="button" value="ALL" />
                        <input onClick={() => { listByCategory_(1); this.updateButton(2) }} className={`titleNotMain ${buttonId == 2 ? "button-3" : "button-4"} ${!refreshGallery ? "cursor-blocked" : ""}`} type="button" value="BUILDING" />
                        <input onClick={() => { listByCategory_(2); this.updateButton(3) }} className={`titleNotMain ${buttonId == 3 ? ("button-3") : ("button-4")} ${!refreshGallery ? "cursor-blocked" : ""}`} type="button" value="FANTASY" />
                        <input onClick={() => { listByCategory_(3); this.updateButton(4) }} className={`titleNotMain ${buttonId == 4 ? ("button-3") : ("button-4")} ${!refreshGallery ? "cursor-blocked" : ""}`} type="button" value="NATURE" />
                        <input onClick={() => { listByCategory_(4); this.updateButton(5) }} className={`titleNotMain ${buttonId == 5 ? ("button-3") : ("button-4")} ${!refreshGallery ? "cursor-blocked" : ""}`} type="button" value="CUTE" />
                        <input onClick={() => { listByCategory_(5); this.updateButton(6) }} className={`titleNotMain ${buttonId == 6 ? ("button-3") : ("button-4")} ${!refreshGallery ? "cursor-blocked" : ""}`} type="button" value="ANIMAL" />
                        <input onClick={() => { listByCategory_(6); this.updateButton(7) }} className={`titleNotMain ${buttonId == 7 ? ("button-3") : ("button-4")} ${!refreshGallery ? "cursor-blocked" : ""}`} type="button" value="CHARACTER" />
                        <input onClick={() => { listByCategory_(7); this.updateButton(8) }} className={`titleNotMain ${buttonId == 8 ? ("button-3") : ("button-4")} ${!refreshGallery ? "cursor-blocked" : ""}`} type="button" value="LANDSCAPE" />
                    </div>
                </div>

                <div className="img-container-gallery">
                    {children}
                </div>
            </section>
        );
    }
}

export { Gallery }