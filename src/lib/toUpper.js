export default (str) => {
  let result = ''

  if (str) {
    for (let letter of str) {
      let num = letter.charCodeAt()
      if (num > 96 && num < 123) {
        num -= 32
        result += String.fromCharCode(num)
      } else {
        result += letter
      }
    }
  }
  return result
}
