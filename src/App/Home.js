import React from 'react';
import Greeting from './Home/Greeting';
import CounterWrapper from './Home/CounterWrapper';

const Home = (props) => {
    return (
        <div>
            <h1><Greeting name="Jisse" /></h1>
            <CounterWrapper />
        </div>
    );
}

export default Home;