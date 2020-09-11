const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BlogPostSchema = new Schema({
  title: String,
  content: String,
})

module.exports = BlogPostSchema
