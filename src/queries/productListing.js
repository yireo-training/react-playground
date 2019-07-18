export default `
query getMyProducts($search: String) {
    products(search: $search) {
      items {
        id
        name
        sku
        small_image {
          label
          url
        }
        swatch_image
        description {
          __html: html
        }
      }
    }
  }
`