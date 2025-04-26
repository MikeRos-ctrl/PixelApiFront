import { HashRouter, Route, Routes } from 'react-router-dom';
import { App } from '../App/App';
import { Profile } from '../Profile/Profile';
import { Checkout } from '../Checkout/Checkout';
import React, { Component } from 'react';
import { LocalDb } from '../../util/LocalDb';
import { AppContext } from '../../context';
import { ApiCall } from '../../util/ApiCall';
import { Documentation } from '../Documentation/Documentation';

const { FillFrontHeader } = ApiCall()

class AppRouter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false
        }
    }

    componentDidMount() {

        const { setMyUser, setMyImages } = this.props

        /*
        *FETCH USER IN LOCALDB
        */
        LocalDb.FindUser().then(response => {

            if (response != "" && response[0].ready == true) {
                console.log("User has been loaded from DB")
                setMyUser(response[0])
            }

            this.setState({ loading: true });

        }).catch(error => {
            console.error("Error retrieving user data:", error);
        });

        /*
         *FETCH IMAGES 
         */

        FillFrontHeader().then(result => {

            if (result != null) {
                console.log(result)
                setMyImages(result)
            }
            else{
                let data = {
                    
                }
            }
        }).catch(error => {
            console.error("I've got a mistake: ", error);
        });
    }

    componentDidUpdate() {

    }

    render() {
        const { loading } = this.state
        const { myUser } = this.props

        if (loading) {

            return (
                <HashRouter>
                    <Routes>
                        <Route path='/' element={<App />} />
                        {/* <Route path='/checkout' element={myUser.ready == false ? <App /> : <Checkout />} /> */}
                        <Route path='/checkout' element={<Checkout />} />
                        <Route path='/profile' element={myUser.ready != false ? <Profile /> : <App />} />
                        <Route path='/documentation' element={<Documentation />} />
                        <Route path='*' element={<p>Not Found</p>} />
                    </Routes>
                </HashRouter >
            )
        }
    }
}

function AppRouterWrapper() {
    const { setMyUser, setMyImages, myUser } = React.useContext(AppContext)
    return <AppRouter setMyUser={setMyUser} setMyImages={setMyImages} myUser={myUser} />
}

export { AppRouterWrapper as AppRouter }