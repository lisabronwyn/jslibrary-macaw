export default (arr, x, index = 0) => {
  for (let i = index; i < arr.length; i++){
    if (arr[i] == x){
      return i
    }
  }

  return -1
}
