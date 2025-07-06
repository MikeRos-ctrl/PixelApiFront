import './index.css';
import React, { useState, useEffect, Component } from 'react';
import Reload from '../../assets/Icon-8.png'
import { ApiCall } from '../../util/ApiCall';
import { FetchImgLogic } from '../../util/FetchImgLogic';
const { fetchImages } = FetchImgLogic()
const { GetRandomImageWithCategories } = ApiCall()

class Demo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            image: null,
            loaded: false
        }
    }

    componentDidMount() {
        this.GetNewImage()
    }

    componentWillUnmount() {
    }

    GetNewImage() {

        this.setState({ image: null, loaded: false })

        GetRandomImageWithCategories().then(result => {
            this.setState({ image: result[0], loaded: true })
        })
    }

    render() {
        const { image, loaded } = this.state

        return (
            <>

                <div className='demoSection'>
                    <h2 className='titleMain'>
                        Picture This:
                        <span className="strongPinkColor"> Your API in Action</span>
                    </h2>

                    <div className={`demoSectionContainer ${!image ? ("loadingAmination") : ("")}`}>

                        {image &&
                            <>
                                <div className='demoSectionContainerLeft'>

                                    <div className={`DemoSectionImg`}>

                                        {loaded &&
                                            <h5 className='titleNotMain'>{image["Name"]}</h5>
                                        }

                                        <img src={image["Image"]} className='image2' onLoad={() => this.setState({ loaded: true })} />

                                        {loaded &&
                                            <p className='regularText'>Categories: {image["Categories"]}</p>
                                        }
                                    </div>

                                    {loaded &&
                                        <div className={`DemoSectionComplement`}>
                                            <p className='regularText'>{image["Description"]}</p>
                                        </div>
                                    }
                                </div>

                                {loaded &&
                                    <div>
                                        <img src={Reload} className="qwer3" onClick={() => this.GetNewImage()} alt="" />
                                    </div>
                                }
                            </>
                        }

                    </div>
                </div>
            </>
        );
    }
}

export { Demo }