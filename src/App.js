import React from 'react';
import './assets/css/index.css';
import { Footer, Navbar } from './components';
import { Home } from './pages';

const App = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <Footer />
        </div>
    )
}

export default App