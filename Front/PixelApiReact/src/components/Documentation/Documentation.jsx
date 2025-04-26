import React, { Component } from 'react';
import { Navbar } from '../Navbar/Navbar';

class Documentation extends Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    render() {
        return (
            <React.Fragment>
                <div className="myWidth">
                    <header>
                        <Navbar />
                    </header>
                </div>
            </React.Fragment>
        )
    }
}

export { Documentation as Documentation }