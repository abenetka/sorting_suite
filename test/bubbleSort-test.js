const assert = require('chai').assert
const bubbleSort = require('../bubbleSort')

describe('Bubble Sort', function(){
  it('returns the original array', function(){
    const originalArray = [1]
    const sortedArray = [1]
    assert.isArray(originalArray)
    assert.isArray(sortedArray)
    assert.deepEqual(bubbleSort(originalArray), sortedArray)
  })
  it('can sort 3 numbers', function(){
    const originalArray = [6,2,5]
    const sortedArray = [2,5,6]
    assert.deepEqual(bubbleSort(originalArray), sortedArray)
  })
  it('can sort 10 numbers', function(){
    const originalArray = [22, 34, 2, 21, 14, 45, 36, 5, 109, 50]
    const sortedArray = [2, 5, 14, 21, 22, 34, 36, 45, 50, 109]
    assert.deepEqual(bubbleSort(originalArray), sortedArray )
  })
})
