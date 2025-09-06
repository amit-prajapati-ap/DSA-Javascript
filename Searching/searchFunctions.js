import { max } from "../utils.js"

export const binarySearch = (arr, target, start = 0, e) => {
  let end = e || arr.length - 1

  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2)
    if (arr[mid] === target) {
      return mid
    } else if (arr[mid] < target) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return -1
}

export const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1
}

export const findPivot = (arr) => {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2)
    if (arr[mid] > arr[0]) {
      start = mid + 1
    } else {
      end = mid
    }
  }
  return start
}

export const findPeak = (arr) => {
  let start = 0
  let end = arr.length - 1
  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2)
    if (arr[mid] < arr[mid + 1]) {
      start = mid + 1
    } else {
      end = mid
    }
  }
  return start
}

export const firstOccurance = (arr, target) => {
  let ans = -1;
  let start = 0
  let end = arr.length - 1

  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2)
    if (arr[mid] === target) {
      ans = mid
      end = mid - 1
    } else if (arr[mid] < target) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return ans
}

export const lastOccurance = (arr, target) => {
  let ans = -1;
  let start = 0
  let end = arr.length - 1

  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2)
    if (arr[mid] === target) {
      ans = mid
      start = mid + 1
    } else if (arr[mid] < target) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return ans
}

export const noOfOccurance = (arr, target) => {
  return lastOccurance(arr, target) - firstOccurance(arr, target) + 1;
}

export const findIntegerRoot = (arr, target) => {
  let start = 0
  let end = arr.length - 1
  let ans = -1
  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2)
    const root = mid * mid
    if (root == target) {
      return mid
    } else if (root < target) {
      ans = mid
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return ans
}

export const findPrecision = (integerRoot, root, precision) => {
  let ans = integerRoot
  let factor = 1
  for (let i = 0; i < precision; i++) {
    factor = factor / 10
    for (let j = ans; j * j < root; j += factor) {
      ans = j
    }
  }
  return ans.toFixed(2)
}

export const findRoot = (root) => {
  const arr = []
  for (let i = 0; i < root; i++) {
    arr.push(i)
  }

  const integerRoot = findIntegerRoot(arr, root)
  if (integerRoot != -1) {
    const precisionRoot = findPrecision(integerRoot, root, 2)
    return precisionRoot
  }
  return 0
}


export const allocateBook = (books, pagesArray, students) => {
  const sumOfPages = (books, pagesArray) => {
    let sum = 0
    for (let i = 0; i < books; i++) {
      sum += pagesArray[i]
    }
    return sum
  }
  const isPossible = (mid) => {
    let currentStudents = 1;
    let pageSum = 0
    for (let i = 0; i < books; i++) {
      if (pagesArray[i] + pageSum <= mid) {
        pageSum += pagesArray[i]
      } else {
        currentStudents++        
        if (currentStudents > students || pagesArray[i] > mid) {
          return false
        }
      }
    }
    return true
  }

  let start = 0
  let end = sumOfPages(books, pagesArray)
  let ans = 0

  while(start <= end) {
    const mid = Math.floor(start + (end - start)/2)
    if (isPossible(mid)) {
      ans = mid
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
  return ans
}
 
export const findMaxDistnaceBetweenCows = (cowsDistance, cows) => {
  let isPossible = (mid) => {
    let cowCount = 1
    let lastPos = cowsDistance[0]
    for (let i = 0; i < cowsDistance.length; i++) {
      if (cowsDistance[i] - lastPos >= mid) {
        cowCount++
        if (cowCount === cows) {
          return true
        }
        lastPos = cowsDistance[i]
      }
    }
    return false
  }

  let ans = 0
  let maxi = -1
  for (let i = 0; i < cowsDistance.length; i++) {
    maxi = max(cowsDistance[i], maxi)
  }

  let start = 0
  let end = maxi
  while(start <= end) {
    const mid = Math.floor(start + (end - start)/2)
    if (isPossible(mid)) {
      ans = mid
      start = mid + 1
    } else {
      end = mid - 1
    }
  }

  return ans
}