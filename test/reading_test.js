const assert = require('assert')
const User = require('../src/user')

describe('Reading users out of the database', () => {
  let joe

  beforeEach(() => {
    joe = new User({ name: 'Joe' })
    joe.save().then(() => done())
  })

  it('should find all users with a name of joe', () => {})
})
