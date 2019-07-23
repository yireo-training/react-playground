import React from 'react';
//import ProductListingContainer from './Products/ProductListingContainerBasic';
//import ProductListingContainer from './Products/ProductListingContainerSmarter';
//import ProductListingContainer from './Products/ProductListingContainerFunctional';
import ProductListingContainer from './Products/ProductListingContainerTest';

const Products = () => {
    return (
        <React.Fragment>
            <ProductListingContainer search="Woo" />
        </React.Fragment>
    )
}

export default Products;