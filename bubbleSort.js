function swap(array, i, j,) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function bubbleSort(array) {
  for(var i = 0; i < array.length; i++) {
    for(var j = 1; j < array.length; j++) {
      if(array[j - 1] > array [j]) {
        swap(array, j - 1, j);
      }
    }
  }
  return array;
}
module.exports = bubbleSort


var array = [ 56, 100, 45, 36, 12, 4, 72, 213, 39, 22]
console.log(bubbleSort(array))
