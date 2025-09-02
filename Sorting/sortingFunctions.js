import {swap} from '../utils.js'

export const selectionSort = (arr) => {
  for(let i = 0 ; i < arr.length ; i++) {
    for(let j = i + 1 ; j < arr.length ; j++) {
      if (arr[i] > arr[j]) {
        swap(arr, i, j)
      }
    }
  }
}

export const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i]
    let j = i - 1
    while (j >= 0) {
      if (arr[j] > temp) {
        arr[j + 1] = arr[j]
        j--
      } else {
        break
      }
    }
    arr[j + 1] = temp
  }
}

export const bubbleSort = (arr) => {
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
