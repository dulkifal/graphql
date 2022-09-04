exports.Category= {
  products: ({ id: categoryId }, { filter }, { db }) => {
    const categoryProducts =  db.products.filter(product => product.categoryId == categoryId)
    let filteredProducts = categoryProducts;
    if (filter) {

      if (filter.onSale === true) {
        filteredProducts = filteredProducts.filter(product => {
          return product.onSale
        })
      } 
    }
    return filteredProducts
  } 
} 