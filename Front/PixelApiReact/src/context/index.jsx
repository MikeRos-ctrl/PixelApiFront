import React from 'react';

const AppContext = React.createContext()

function AppProvider({ children }) {

    const [myUser, setMyUser] = React.useState({
        clientId: null,
        email: null,
        acctKey: null,
        ready: false,
        tempPlan: null,
        freePlan: {
            active: false,
            token: null,
            startDate: null
        },

        premiumPlan: {
            active: false,
            startDate: null,
            endDate: null,
            activeMonts: null,
            token: null
        }
    })

    const [myModal, setMyModal] = React.useState({
        index: 0,
        flow: 'A',
        open: false
    })

    /*
    * 0 = Normal page
    * 1 = Documentation page
    * 2 = About
    */
    const [page, setPage] = React.useState(0)

    const [myImages, setMyImages] = React.useState([])
    const [refreshGallery, setRefreshGallery] = React.useState(true)
    const [scrollToPricing, setScrollToPricing] = React.useState(false);

    return (
        <AppContext.Provider value={{
            myUser, setMyUser,
            myImages, setMyImages,
            refreshGallery, setRefreshGallery,
            myModal, setMyModal,
            page, setPage,
            scrollToPricing, setScrollToPricing
        }}>
            {children}
        </AppContext.Provider >
    )
}

export { AppProvider, AppContext }