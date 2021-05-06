import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './assets/css/index.css';
import { Footer, Navbar } from './components';
import { Home } from './pages';
import { getCount } from './redux/actions/covidTrack';

import AOS from 'aos';

AOS.init();

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCount());
    }, [dispatch])

    return (
        <div>
            <Navbar />
            <Home />
            <Footer />
        </div>
    )
}

export default App