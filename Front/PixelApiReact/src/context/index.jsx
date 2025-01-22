import React from 'react';

const AppContext = React.createContext()

function AppProvider({ children }) {

    const [myUser, setMyUser] = React.useState({
        id: null,
        accountType: null,
        email: null,
        accountKey: null,
        ready: false,
    })

    const [myImages, setMyImages] = React.useState([])
    const [refreshGallery, setRefreshGallery] = React.useState(true)

    return (
        <AppContext.Provider value={{
            myUser,
            setMyUser,
            myImages,
            setMyImages,
            refreshGallery, 
            setRefreshGallery
        }}>
            {children}
        </AppContext.Provider >
    )
}

export { AppProvider, AppContext }