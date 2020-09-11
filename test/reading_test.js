const assert = require('assert')
const User = require('../src/user')

describe('Reading users out of the database', () => {
  let joe, maria, alex, zach

  beforeEach((done) => {
    // use 'done' for async code

    alex = new User({ name: 'Alex' })
    joe = new User({ name: 'Joe' })
    maria = new User({ name: 'Maria' })
    zach = new User({ name: 'Zach' })

    Promise.all([alex.save(), joe.save(), maria.save(), zach.save()]).then(() =>
      done(),
    )
  })

  it('should find all users with a name of joe', (done) => {
    // use 'done' for async code
    User.find({ name: 'Joe' }).then((users) => {
      // Use .toString() because _id property is typeof object
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

  it('can skip and limit the result set', () => {
    // -Alex- [Joe Maria] Zach
    User.find({}).skip(1).limit(2)
  })
})
