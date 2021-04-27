import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './assets/css/index.css';
import { Footer, Navbar } from './components';
import { Home } from './pages';
import { getCount } from './redux/actions/covidTrack';
import backsound from './assets/amomenttoremember.mp3';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCount());
    }, [dispatch])

    return (
        <div>
            <Navbar />
            <Home />
            {/* <Footer /> */}
            {/* <audio controls autoPlay hidden>
                <source src={backsound} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio> */}
        </div>
    )
}

export default App