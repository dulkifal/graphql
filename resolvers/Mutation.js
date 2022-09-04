const { v4: uuid } = require('uuid');

exports.Mutation = {
  addCategory: (parent, { input }, { db }) => { 
     
    const {name} = input;
    const newCategory = {
      id: uuid(),
      name
    }
    db.categories.push(newCategory)
    return newCategory
  },
  addProduct: (parent, { input }, { db }) => {
    const {name, description, image, price, quantity, onSale, categoryId} = input;
    const newProduct = {
      id: uuid(),
      name,
      description,
      image,
      price,
      quantity,
      onSale,
      categoryId
    }
    db.products.push(newProduct)
    return newProduct
  },
  addReview: (parent, { input }, { db }) => {
    const {productId, date, title, comment, rating} = input;
    const newReview = {
      id: uuid(),
      productId,
      date,
      title,
      comment,
      rating
    }
    db.reviews.push(newReview)
    return newReview
  },
  deletCategory: (parent, { id }, { db }) => {
    db.categories= db.categories.filter(category => category.id !== id)
   db.products= db.products.map(product =>  {
    if(product.categoryId === id)
      return {
      ...product,
      categoryId: null
    } 
    return product
   })
    return true
  },
  deleteProduct: (parent, { id }, { db }) => {
    db.products= db.products.filter(product => product.id !== id)
    db.reviews= db.reviews.filter(review => review.productId !== id)
    return true
  },
  deleteReiw: (parent, { id }, { db }) => {
    db.reviews= db.reviews.filter(review => review.id !== id)
    return true
  },
  updateCategory: (parent, { id, input }, { db }) => {
    const {name} = input;
    const categoryIndex = db.categories.findIndex(category => category.id === id)
    const updatedCategory = {
      ...db.categories[categoryIndex],
      name
    }
    db.categories[categoryIndex] = updatedCategory
    return updatedCategory
  },
  updateProduct: (parent, { id, input }, { db }) => {
    const { name } = input;
    const productIndex = db.procucts.findIndex(product => product.id === id)
    const updatedProduct = {
      ...db.procucts[productIndex],
      name
    }
   return db.procucts[productIndex] 
  },



}