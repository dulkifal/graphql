exports.Query = {
  products: (parent, { filter }, { db }) => {
    let filetedProducts = db.products;

    if (filter) {
      const { onSale, avgRating } = filter;
      if (onSale === true) {
        filetedProducts = filetedProducts.filter(product => {
          return product.onSale
        })
      }
      if ([1, 2, 3, 4, 5].includes(avgRating)) {
        filetedProducts = filetedProducts.filter(product => {
          let sumRating = 0;
          let numOfReviews = 0;
          db.reviews.forEach(review => {
            if (review.productId === product.id) {
              sumRating += review.rating;
              numOfReviews++;

            }
          })
          const avgProductRating = sumRating / numOfReviews;
           
          return avgProductRating >= avgRating

        })
      }
    }
    return filetedProducts
  },
  product: (parent, { id }, { db }) => {
    return db.products.find(product => { product.id == id })
  },
  categories: (parent, args, { db }) => db.categories,
  category: (parent, { id }, { db }) => {
    return db.category = categories.find(category => category.id == id)
  },
} 