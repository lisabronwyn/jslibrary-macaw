export default (arr, compareArr) => {
  let result = []

  if (!arr) {
    return result
  }

  for (let i =0; i<arr.length; i++){
    let found = false

    for (let j =0; j < compareArr.length; j++){
      arr[i] == compareArr[j] ? found = true :''
    }

    !found ? result.push(arr[i]) : ''
  }

  return result
}
