import React from 'react';

const Product = (props) => (
    <li>
        {props.item.name} [{props.item.sku}]
        <img width="40" src={props.item.small_image.url} />
        <div dangerouslySetInnerHTML={props.item.description}></div>
    </li>
);  

export default Product;