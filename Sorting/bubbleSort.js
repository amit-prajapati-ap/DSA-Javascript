import { IOHandler, swap } from "../utils.js";

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let flag = false
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        flag = true
      }
    }
    if (flag) {
      break
    }
  }
}

(async () => {
  const io = new IOHandler();
  let arr = await io.readArray()
  bubbleSort(arr)
  io.printArray(arr)
  io.close();
})();