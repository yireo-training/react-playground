import React from 'react';
import ProductListingContainer from '../Products/ProductListingContainerBasic';
//import ProductListingContainer from '../Products/ProductListingContainerSmarter';
//import ProductListingContainer from '../Products/ProductListingContainerFunctional';
//import ProductListingContainer from '../Products/ProductListingContainerTest';
//import ProductListingContainer from '../Products/ProductListingContainerFunctional2';

const ProductsPage = () => {
    return (
        <React.Fragment>
            <ProductListingContainer search="Hoo" />
        </React.Fragment>
    )
}

export default ProductsPage;