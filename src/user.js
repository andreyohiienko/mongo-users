const mongoose = require('mongoose')
const PostSchema = require('./post')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: {
    type: String,
    validate: {
      validator: (name) => name.length > 2,
      message: 'Name must be longer than 2 characters.',
    },
    required: [true, 'Name is required.'],
  },
  // postCount: Number -> deleted because we use virtual property
  likes: Number,
  posts: [PostSchema],
  blogPosts: [{ type: Schema.Types.ObjectId, ref: 'blogPost' }],
})

UserSchema.virtual('postCount').get(function () {
  // type in terminal
  // node
  // const User = require('./src/user')
  // const joe = new User({posts: [{title: 'asdf'}]})
  // joe.postCount
  // returns 1

  return this.posts.length
})

const User = mongoose.model('user', UserSchema)

module.exports = User
