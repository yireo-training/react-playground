import React from 'react'
import PropTypes from 'prop-types';

let Greeting = (props) => {
    return (
        <div>
            Hello, {props.name}
        </div>
    );
}

export default Greeting;