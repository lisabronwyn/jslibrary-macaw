const fill = (ourArray, val, begin = 0, end = ourArray.length)=> {

  let result = []
  for (let i = 0; i < ourArray.length; i++) {
    if (i >= begin && i < end) {
      result.push(val)
    } else {
      result.push(ourArray[i])
    }
  }
  return result
}

export default fill
