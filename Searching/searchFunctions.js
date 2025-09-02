export const binarySearch = (arr, target, start = 0, e) => {
  let end = e || arr.length - 1

  while(start <= end) {
    const mid = Math.floor(start + (end - start)/2)
    if (arr[mid] === target) {
      return mid
    } else if(arr[mid] < target) {
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
  while(start < end) {
    const mid = Math.floor(start + (end - start)/2)
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
  while(start < end) {
    const mid = Math.floor(start + (end - start)/2)
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

  while(start <= end) {
    const mid = Math.floor(start + (end - start)/2)
    if (arr[mid] === target) {
      ans = mid
      end = mid - 1
    } else if(arr[mid] < target) {
      start = mid + 1
    } else {
      end = mid -1
    }
  }
  return ans
}

export const lastOccurance = (arr, target) => {
  let ans = -1;
  let start = 0
  let end = arr.length - 1

  while(start <= end) {
    const mid = Math.floor(start + (end - start)/2)
    if (arr[mid] === target) {
      ans = mid
      start = mid + 1
    } else if(arr[mid] < target) {
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