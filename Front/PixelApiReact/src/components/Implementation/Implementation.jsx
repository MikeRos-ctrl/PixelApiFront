import './index.css';
import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

class Implementation extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        const codedString = `
const API = 'http://changexd:8080/pixel/pixelapi';
const TOKEN = 'your_token';

async function ApiCallExample() {

    try {
        const response = await fetch(API + "/exampleEndpoint", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + TOKEN 
            }
        })
        return response.json();
    } catch (error) {
        console.error('Fetch error:', error);
    }
}
`;

        return (
            <div className="implementation-section">

                <h2 className="titleMain">
                    <span className="strongPinkColor">Easy</span>
                    <span className="darkColor"> to implement</span>
                </h2>

                <div className='xdxdxd'>

                    <SyntaxHighlighter
                        className="sexo2"
                        language="javascript"
                        style={atomOneDark} customStyle={{
                            fontSize: '15px',
                            padding: '25px',
                            borderRadius: '10px'
                        }}>
                        {codedString}
                    </SyntaxHighlighter>

                    <div className="titleMain">

                        <h3 className="titleNotMain">
                            <span className="orange-color">Pixel art</span>
                            <span className="darkColor"> in few code lines:</span>
                        </h3>

                        <ul>
                            <li>Get you Token</li>
                            <li>Implement it in the header</li>
                            <li>Enjoy</li>
                        </ul>
                    </div>

                </div>
            </div>
        );
    }
}

export { Implementation };
