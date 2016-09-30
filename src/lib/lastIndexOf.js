export default (arr, x, index = arr.length -1) => {
  for (let i = index; i > -1 ; i--){
    if (arr[i] == x){
      return i
    }
  }

  return "value not found"
}
