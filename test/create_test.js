const assert = require('assert')
const User = require('../src/user')

describe('Creating records', () => {
  it('should save a user', (done) => {
    // use 'done' for async code
    const joe = new User({ name: 'Joe' })

    joe.save().then(() => {
      // Has joe been saved successfully?
      assert(!joe.isNew)
      done()
    })
  })
})
