import { HashRouter, Route, Routes } from 'react-router-dom';
import App from '../App/App';
import { Profile } from '../Profile/Profile';
import { Documentation } from '../Documentation/Documentation';
import React, { useEffect, useRef, Component } from 'react';
import { LocalDb } from '../../util/LocalDb';
import { v4 as uuidv4 } from 'uuid';

class AppRouter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            myUser: {
                id: null,
                accountType: null,
                email: null,
                ready: false,
                stored: false
            }
        }
    }

    componentDidMount() {
        
        LocalDb.FindUser().then(response => {

            if (response[0].ready == true) {
                console.log("User has been loaded from DB")
                this.setMyUser(response[0])
            }

        }).catch(error => {
            console.error("Error retrieving user data:", error);
        });
    }

    componentDidUpdate() {

    }

    setMyUser = (myUser_) => {
        this.setState({
            myUser: myUser_
        });
    }

    render() {
        const { myUser } = this.state

        return (
            <HashRouter>
                <Routes>
                    <Route path='/' element={<App myUser={myUser} setMyUser={this.setMyUser} />} />
                    <Route path='/profile' element={myUser.ready != null ? <Profile /> : <App />} />
                    <Route path='/documentation' element={<Documentation />} />
                    <Route path='*' element={<p>Not Found</p>} />
                </Routes>
            </HashRouter >
        )
    }
}

export { AppRouter }