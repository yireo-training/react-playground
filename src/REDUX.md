
Old state: price 41

dispatch({type: "CHANGE_PRICE", price: 42, productId: 1})

Reducer:
- MessagesReducer (...)
- CustomerReducer (...)
- ProductsReducer (products)
    if (type === CHANGE_PRICE) {
        looping products
            for productId 1
                price = 42
        return products
    }

New state: price 42

- CategoryPage
    - CategoryListing
        - Products: //const products = useSelector(state => state.products)
            - Product
                - Price => const price = useSelector(state => {
                    state.products.maps(product => {
                        if (product.id !== props.productId) {
                            continue;
                        }

                        if (product.price === props.price) {
                            continue;
                        }

                        return product.price;
                    })
                })

usePriceByProductId(productId) = price