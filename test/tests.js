import _ from 'lodash'
import { expect } from 'chai'

import { isEmail } from '../src/actions/contact-actions'

let hello

describe('test example', function () {
  beforeEach(function () {
    hello = 'hello world'
  })

  it('should be able to say "hello"', function () {
    expect(_.isEmpty(hello)).not.to.equal(true)
    expect(hello.indexOf('hello')).to.be.above(-1)
  })

  it('should validate email properly', function () {
    expect(isEmail('test@email.com')).to.equal(true)
    expect(isEmail('blah blah blah')).to.equal(false)
  })
})
