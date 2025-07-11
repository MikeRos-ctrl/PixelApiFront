import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRouter } from './components/AppRouter/AppRouter.jsx'
import './css/normalize.css'
import './css/globalConfig.css'
import { AppProvider } from "./context/index.jsx"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppProvider>
        <AppRouter />
    </AppProvider>
);