import { HashRouter, Route, Routes } from 'react-router-dom';
import App from '../App/App';
import { Profile } from '../Profile/Profile';
import { Checkout } from '../Checkout/Checkout';
import React, { useEffect, useRef, Component } from 'react';
import { LocalDb } from '../../util/LocalDb';
import { AppContext } from '../../context';
import { ApiCall } from '../../util/ApiCall';
import { FetchImgLogic } from '../../util/FetchImgLogic';

const { FillFrontHeader } = ApiCall()
const { fetchImages } = FetchImgLogic()

class AppRouter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            checkOutFlag: false
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
            fetchImages(result).then(res => {
                setMyImages(res["fetchedGallery"])
            })
        }).catch(error => {
            console.error("I've got a mistake: ", error);
            alert("I've got a mistake: ", error);
        });
    }

    componentDidUpdate() {

    }

    setCheckOutFlag = () => {
        this.setState({ checkOutFlag: !this.state.checkOutFlag })
    }

    render() {
        const { loading, checkOutFlag } = this.state

        if (loading) {

            return (
                <HashRouter>
                    <Routes>
                        <Route path='/' element={<App setCheckOutFlag={this.setCheckOutFlag} />} />
                        {/* <Route path='/checkout' element={checkOutFlag == false ? <App setCheckOutFlag={this.setCheckOutFlag} myUser={myUser} setMyUser={this.setMyUser} /> : <Checkout setCheckOutFlag={this.setCheckOutFlag} />} /> */}
                        {/* <Route path='/profile' element={myUser.ready != null ? <Profile myUser={myUser} setMyUser={this.setMyUser} /> : <App />} /> */}
                        <Route path='*' element={<p>Not Found</p>} />
                    </Routes>
                </HashRouter >
            )
        }
    }
}

function AppRouterWrapper() {
    const { setMyUser, setMyImages, myImages } = React.useContext(AppContext)
    return <AppRouter setMyUser={setMyUser} setMyImages={setMyImages} myImages={myImages} />
}

export { AppRouterWrapper as AppRouter }