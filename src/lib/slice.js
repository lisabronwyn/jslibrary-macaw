export default ( ourArray, begin = 0, end = ourArray.length)=> {
  let result = []
  if (begin < 0) {
    begin = ourArray.length + begin
  }
  if (end < 0) {
    end = ourArray.length + end
  }
  for (let i = begin; i < end; i++) {
    result.push(ourArray[i])
  }
  return result
}
