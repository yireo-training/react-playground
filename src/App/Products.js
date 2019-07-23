import React from 'react';
import ProductListingContainer from './Products/ProductListingContainerBasic';
//import ProductListingContainer from './Products/ProductListingContainerSmarter';
//import ProductListingContainer from './Products/ProductListingContainerFunctional';

const Products = () => {
    return (
        <React.Fragment>
            <ProductListingContainer search="Woo" />
        </React.Fragment>
    )
}

export default Products;