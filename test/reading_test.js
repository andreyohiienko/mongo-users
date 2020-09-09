const assert = require('assert')
const User = require('../src/user')

describe('Reading users out of the database', () => {
  let joe

  beforeEach((done) => {
    // use 'done' for async code
    joe = new User({ name: 'Joe' })
    joe.save().then(() => done())
  })

  it('should find all users with a name of joe', (done) => {
    // use 'done' for async code
    User.find({ name: 'Joe' }).then((users) => {
      assert(users[0]._id.toString() === joe._id.toString())
      done()
    })
  })

  it('should find a user with a particular id', (done) => {
    // use 'done' for async code
    User.findOne({ _id: joe._id }).then((user) => {
      assert(user.name === 'Joe')
      done()
    })
  })
})
