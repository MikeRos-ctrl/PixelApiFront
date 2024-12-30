import './index.css';
import React, { useState, useEffect, Component } from 'react';

class Gallery extends Component {

    constructor(props) {
        super(props);

        this.state = {
            buttonId: 1
        }
    }

    componentDidMount() {

    }

    componentWillUnmount() {
    }

    updateButton = (newId) => {
        this.setState({
            buttonId: newId
        })
    }

    render() {
        const { children, listByCategory_ } = this.props;
        const { buttonId } = this.state;

        return (

            <section>

                <div className="section-tittle">

                    <h2 className="titleMain">
                        <span className="darkColor">Explore our</span>
                        <span className="strongPinkColor"> art gallery</span>
                    </h2>

                    <div className="categories">
                        <input onClick={() => { listByCategory_("all"); this.updateButton(1) }} className={`titleNotMain ${buttonId == 1 ? ("button-3") : ("button-4")}`} type="button" value="ALL" />
                        <input onClick={() => { listByCategory_("character"); this.updateButton(2) }} className={`titleNotMain ${buttonId == 2 ? ("button-3") : ("button-4")}`} type="button" value="CHARACTER" />
                        <input onClick={() => { listByCategory_("animal"); this.updateButton(3) }} className={`titleNotMain ${buttonId == 3 ? ("button-3") : ("button-4")}`} type="button" value="ANIMAL" />
                        <input onClick={() => { listByCategory_("landscape"); this.updateButton(4) }} className={`titleNotMain ${buttonId == 4 ? ("button-3") : ("button-4")}`} type="button" value="LANDSCAPE" />
                        <input onClick={() => { listByCategory_("food"); this.updateButton(5) }} className={`titleNotMain ${buttonId == 4 ? ("button-3") : ("button-4")}`} type="button" value="FOOD" />
                        <input onClick={() => { listByCategory_("items"); this.updateButton(5) }} className={`titleNotMain ${buttonId == 4 ? ("button-3") : ("button-4")}`} type="button" value="ITEMS" />
                        <input onClick={() => { listByCategory_("memes"); this.updateButton(5) }} className={`titleNotMain ${buttonId == 4 ? ("button-3") : ("button-4")}`} type="button" value="MEMES" />
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