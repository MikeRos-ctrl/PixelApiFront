import { HashRouter, Route, Routes } from 'react-router-dom';
import App from '../App/App';
import { Profile } from '../Profile/Profile';
import { Documentation } from '../Documentation/Documentation';
import React, { useState, useEffect } from 'react';


const AppRouter = () => {
    
    const [myUser, setMyUser] = React.useState({
        id: null,
        accountType: null,
        email: null,
        ready: false
    })
  
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<App myUser={myUser} setMyUser={setMyUser} />} />
                <Route path='/profile' element={myUser.ready != null ? <Profile /> : <App />} />
                <Route path='/documentation' element={<Documentation />} />
                <Route path='*' element={<p>Not Found</p>} />
            </Routes>
        </HashRouter>
    )
}

export { AppRouter }