import React from 'react';

const Counter = function(props) {
    return (
        <div>
            <button onClick={props.onClickHandler}>Increment</button>
            <p>Counter: {props.counter}</p>
        </div> 
    );
}

export default Counter;