import { bubbleSort, insertionSort, selectionSort } from "./sortingFunctions.js";

const main = async () => {
  let arr = await io.readArray()
  selectionSort(arr)
  // insertionSort(arr)
  // bubbleSort(arr)
  io.printArray(arr)
  io.close();
}

main()