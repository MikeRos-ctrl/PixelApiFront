import { HashRouter, Route, Routes } from 'react-router-dom';
import App from '../App/App';
import { Profile } from '../Profile/Profile';
import { Documentation } from '../Documentation/Documentation';
import React from "react";

const AppRouter = () => {

    const [myUser, setMyUser] = React.useState(null)

    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<App myUser={myUser} setMyUser={setMyUser} />} />
                <Route path='/profile' element={myUser ? <Profile /> : <App />} />
                <Route path='/documentation' element={<Documentation />} />
                <Route path='*' element={<p>Not Found</p>} />
            </Routes>
        </HashRouter>
    )
}

export { AppRouter }