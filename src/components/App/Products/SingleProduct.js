import React from 'react';

const Product = (props) => (
    <li>
        {props.item.name} [{props.item.sku}]
        <img width="40" src={props.item.small_image.url} alt={props.item.name} />
        <div dangerouslySetInnerHTML={props.item.description}></div>
    </li>
);  

export default Product;