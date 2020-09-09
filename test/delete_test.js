const assert = require('assert')
const User = require('../src/user')

describe('Deleting a user', () => {
  let joe

  beforeEach((done) => {
    // use 'done' for async code
    joe = new User({ name: 'Joe' })
    joe.save().then(() => done())
  })

  it('model instance remove', (done) => {
    joe
      .remove()
      .then(() => User.findOne({ name: 'Joe' }))
      .then((user) => {
        assert(user === null)
        done()
      })
  })

  it('class method remove', (done) => {
    // use 'done' for async code
    // Remove a bunch of records with some given criteria
    User.deleteOne({ name: 'Joe' }) // remove() depreacated
      .then(() => User.findOne({ name: 'Joe' }))
      .then((user) => {
        assert(user === null)
        done()
      })
  })

  it('class method findAndRemove', (done) => {
    // use 'done' for async code
    User.findOneAndRemove({ name: 'Joe' })
      .then(() => User.findOne({ name: 'Joe' }))
      .then((user) => {
        assert(user === null)
        done()
      })
  })

  it('class method  findByIdAndRemove', (done) => {
    // use 'done' for async code
    User.findByIdAndRemove(joe._id)
      .then(() => User.findOne({ name: 'Joe' }))
      .then((user) => {
        assert(user === null)
        done()
      })
  })
})
