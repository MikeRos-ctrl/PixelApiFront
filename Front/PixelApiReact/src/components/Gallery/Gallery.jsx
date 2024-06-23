import './index.css';
import React, { useState, useEffect, Component } from 'react';

class Gallery extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentWillUnmount() {
    }

    render() {
        const { children, listByCategory_ } = this.props;

        return (

            <section>

                <div className="section-tittle">

                    <h2 className="titleMain">
                        <span className="darkColor">Explore our</span>
                        <span className="strongPinkColor"> art gallery</span>
                    </h2>

                    <div className="categories">
                        <input onClick={() => listByCategory_("all")} className="button-3 titleNotMain" type="button" value="ALL" />
                        <input onClick={() => listByCategory_("character")} className="button-4 titleNotMain" type="button" value="CHARACTER" />
                        <input onClick={() => listByCategory_("animal")} className="button-4 titleNotMain" type="button" value="ANIMAL" />
                        <input onClick={() => listByCategory_("landscape")} className="button-4 titleNotMain" type="button" value="LANDSCAPE" />
                        {/* <h5>reload icon</h5> */}
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