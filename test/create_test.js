const assert = require('assert')
const User = require('../src/user')

describe('Creating records', () => {
  it('should save a user', () => {
    const joe = new User({ name: 'Joe' })
  })
})
