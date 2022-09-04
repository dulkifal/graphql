const {  gql } = require('apollo-server')

exports.typeDefs = gql`
type Query {
 
  products(filter:  ProductFilterInput): [Product!]!
  product(id: ID!): Product
  categories: [Category!]!
  category(id: ID!): Category
  
}
type Mutation{
  addCategory(input: AddCategoryInput!): Category!
  addProduct(input: AddProductInput!): Product!
  addReview(input: AddReviewInput!): Review!
  deletCategory(id: ID!): Boolean!
  deleteProduct(id: ID!): Boolean!
  deleteReiw(id: ID!): Boolean!
  updateCategory(id: ID!, input: UpdateCategoryInput!): Category!
  updateProduct(id: ID!, input: UpdateProductInput!): Product!
  updateReview(id: ID!, input: UpdateReviewInput!): Review!
  
}
type Product{
  id: ID!
  name: String!
  description: String!
  image: String!
  price: Float!
  quantity: Int!
 onSale: Boolean!
 category: Category 
 reviews: [Review!]!

}
type Category {
  id: ID!
  name: String!
  products(filter:  ProductFilterInput): [Product!]!

}

type Review{
  id: ID!
  date: String!
  title: String!
  comment: String!
  rating: Int!

}

input ProductFilterInput{
  onSale: Boolean
  avgRating: Int

}
input AddCategoryInput{
  name: String!
}
input UpdateCategoryInput{
  name: String!
  
} 
input AddProductInput{
  name: String!
  description: String!
  image: String!
  price: Float!
  quantity: Int!
  onSale: Boolean!
  categoryId: ID!
} 
input UpdateProductInput{
  name: String!
  description: String!
  image: String!
  price: Float!
  quantity: Int!
  onSale: Boolean!
  categoryId: ID
} 
input AddReviewInput{
  productId: ID!
  date: String!
  title: String!
  comment: String!
  rating: Int!
}
input UpdateReviewInput{
  productId: ID!
  date: String!
  title: String!
  comment: String!
  rating: Int!
}



`
