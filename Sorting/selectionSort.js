import {io, swap} from '../utils.js'

const selectionSort = (arr) => {
  for(let i = 0 ; i < arr.length ; i++) {
    for(let j = i + 1 ; j < arr.length ; j++) {
      if (arr[i] > arr[j]) {
        swap(arr, i, j)
      }
    }
  }
}

(async() => {
  let arr = await io.readArray()
  selectionSort(arr)
  io.printArray(arr)
  io.close();
})();