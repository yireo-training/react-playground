import React, { useState } from 'react';
//import ProductListingContainer from '../Products/ProductListingContainerBasic';
//import ProductListingContainer from '../Products/ProductListingContainerSmarter';
import ProductListingContainer from '../Products/ProductListingContainerFunctional';
//import ProductListingContainer from '../Products/ProductListingContainerTest';

const ProductsPage = () => {
    const [search, setSearch] = useState('Dress');

    const onSearchChange = (event) => { 
        setSearch(event.target.value); 
    }

    return (
        <React.Fragment>
            <input type="text" onChange={onSearchChange} />
            <ProductListingContainer search={search} />
        </React.Fragment>
    )
}

export default ProductsPage;