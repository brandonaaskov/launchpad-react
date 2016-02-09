import _ from 'lodash'
import { expect } from 'chai'

let hello

describe('test example', function () {
  beforeEach(function () {
    hello = 'hello world'
  })

  it('should be able to say "hello"', function () {
    expect(_.isEmpty(hello)).not.to.equal(true)
    expect(hello.indexOf('hello')).to.be.above(-1)
  })
})
