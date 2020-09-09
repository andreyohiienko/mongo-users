const assert = require('assert')
const User = require('../src/user')

describe('Updating records', () => {
  let joe

  beforeEach((done) => {
    joe = new User({ name: 'Joe' })
    joe.save().then(() => done())
  })

  function assertName(operation, done) {
    operation
      .then(() => User.find({}))
      .then((users) => {
        assert(users.length === 1)
        assert(users[0].name === 'Alex')
        done()
      })
  }

  it('instance type using set n save', (done) => {
    // Possible to make few changes and only then call save()
    // in order touching data base one time
    joe.set('name', 'Alex')
    assertName(joe.save(), done)
  })

  it('A model instance can update', (done) => {
    // update() is deprecated
    assertName(joe.updateOne({ name: 'Alex' }), done)
  })
})
