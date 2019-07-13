import React from 'react';
import Greeting from './Greeting';
import CounterWrapper from './CounterWrapper';

const Home = (props) => {
    let customer = {key: '42', name: 'John Doe', firstName: 'John'};

    return (
        <div>
            <h1><Greeting name="Jisse" /></h1>
            <CounterWrapper />
        </div>
    );
}

export default Home;