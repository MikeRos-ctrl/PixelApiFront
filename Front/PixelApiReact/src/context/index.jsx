import React from 'react';

const AppContext = React.createContext()

function AppProvider({ children }) {

    const [myUser, setMyUser] = React.useState({
        clientId: null,
        email: null,
        acctKey: null,
        ready: false,
    })

    const [myModal, setMyModal] = React.useState({
        index: 0,
        flow: 'A',
        open: false
    })

    const [myImages, setMyImages] = React.useState([])
    const [refreshGallery, setRefreshGallery] = React.useState(true)

    return (
        <AppContext.Provider value={{
            myUser, setMyUser,
            myImages, setMyImages,
            refreshGallery, setRefreshGallery,
            myModal, setMyModal
        }}>
            {children}
        </AppContext.Provider >
    )
}

export { AppProvider, AppContext }