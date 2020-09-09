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
    // Remove a bunch of records with some given criteria
    User.deleteOne({ name: 'Joe' }) // remove() depreacated
      .then(() => User.findOne({ name: 'Joe' }))
      .then((user) => {
        assert(user === null)
        done()
      })
  })

  it('class method findAndRemove', () => {})

  it('class method  findByIdAndRemove', () => {})
})
