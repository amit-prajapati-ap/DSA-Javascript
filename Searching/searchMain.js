import { io } from "../utils.js";
import { binarySearch, findPeak, findPivot, firstOccurance, lastOccurance, linearSearch, noOfOccurance } from "./searchFunctions.js";

const searchInRotation = async () => {
  const arr = await io.readArray()
  io.printArray(arr)
  const target = await io.readInt()
  const pivot = findPivot(arr)
  let result = -1;
  if (arr[pivot] <= target && target <= arr[arr.length - 1]) {
    result = binarySearch(arr, target, pivot, arr.length - 1)
  } else {
    result = binarySearch(arr, target, 0, pivot - 1)
  }
  if (result != -1) {
    console.log(`Element are found at location ${result + 1}`)
  } else {
    console.log(`Element not found`)
  }
  io.close()
}

const pivotFinder = async () => {
  const arr = await io.readArray()
  io.printArray(arr)
  const pivot = findPivot(arr)
  if (pivot != -1) {
    console.log(`Minimum pivot element is ${arr[pivot]} at position ${pivot + 1}`)
    console.log(`Maximum pivot element is ${arr[pivot-1]} at position ${pivot}`)
  } else {
    console.log("Element not found")
  }
  io.close()
}

const peakFinder = async () => {
  const arr = await io.readArray()
  io.printArray(arr)
  const peak = findPeak(arr)
  if (peak != -1) {
    console.log(`${arr[peak]} element is peak mountain at position ${peak + 1}`)
  } else {
    console.log("Element not found")
  }
  io.close()
}

const occuranceFinder = async () => {
  const arr = await io.readArray()
  io.printArray(arr)
  const target = await io.readInt()
  const fo = firstOccurance(arr, target)
  const lo = lastOccurance(arr, target)
  const numOfOccurance = noOfOccurance(arr, target)
  if (numOfOccurance != -1) {
    console.log("First occurance: ", fo + 1)
    console.log("Last occurance: ", lo + 1)
    console.log("Number of occurance: ", numOfOccurance)
  } else {
    console.log("Elements not found")
  }
  io.close()
}

const targetFinder = async () => {
  const arr = await io.readArray()
  const target = await io.readInt()
  const result = linearSearch(arr, target)
  // const result = binarySearch(arr, target)
  if (result != -1) {
    console.log("Element are found at location : ", result + 1)
  } else {
    console.log("Element not found")
  }
  io.close()
}