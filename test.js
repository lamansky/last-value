'use strict'

const assert = require('assert')
const lastValue = require('.')

describe('lastValue()', function () {
  it('should return the last item in an Array', function () {
    assert.strictEqual(lastValue([1, 2, 3]), 3)
  })

  it('should return undefined for an empty Array', function () {
    assert.strictEqual(typeof lastValue([]), 'undefined')
  })

  it('should return the last value of an iterator', function () {
    assert.strictEqual(lastValue([2, 3, 4][Symbol.iterator]()), 4)
  })

  it('should return undefined for an empty iterator', function () {
    assert.strictEqual(typeof lastValue([][Symbol.iterator]()), 'undefined')
  })

  it('should return the last value of a Map', function () {
    assert.strictEqual(lastValue(new Map([['a', 1], ['b', 2]])), 2)
  })

  it('should return undefined for an empty Map', function () {
    assert.strictEqual(typeof lastValue(new Map()), 'undefined')
  })

  it('should return the last value of an Object', function () {
    assert.strictEqual(lastValue({a: 1, b: 2}), 2)
  })

  it('should return undefined for an empty Object', function () {
    assert.strictEqual(typeof lastValue({}), 'undefined')
  })

  it('should return the last item in a Set', function () {
    assert.strictEqual(lastValue(new Set([1, 2, 3])), 3)
  })

  it('should return undefined for an empty Set', function () {
    assert.strictEqual(typeof lastValue(new Set()), 'undefined')
  })

  it('should return the last item in a Typed Array', function () {
    assert.strictEqual(lastValue(new Int8Array(new ArrayBuffer(4))), 0)
  })

  it('should support the bind operator', function () {
    assert.strictEqual(lastValue.call([1, 2, 3]), 3)
  })
})
