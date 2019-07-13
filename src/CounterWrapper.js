import React from 'react';
import Counter from './Counter';

class CounterWrapper extends React.Component {    
    constructor(props) {
        super(props);
        this.state = {active: true, counter: 0};
    }

    incrementCounter() {
        //this.setState({counter: this.state.counter + 1 });
        this.setState(function(oldState, oldProps) { return {counter: oldState.counter + 1 }});
    }

    componentDidUpdate()
    {
        console.log('update');
    }

    render() {
        return <Counter counter={this.state.counter} onClickHandler={this.incrementCounter.bind(this)} />;
    }
}

export default CounterWrapper;