import { HashRouter, Route, Routes } from 'react-router-dom';
import App from '../App/App';
import { Profile } from '../Profile/Profile';

const AppRouter = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='*' element={<p>Not Found</p>} />
            </Routes>
        </HashRouter>
    )
}

export { AppRouter }