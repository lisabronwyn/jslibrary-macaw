export default  (str, pat, replace) => {
  let result = ""
  let indexFound = 0
  let j = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] == pat[j]) {
      if (j == 0) {indexFound = i}
      j++
      if (j >= pat.length) {
        result = result.concat(replace)
      }

    } else {
      if (j != 0) {
        j = 0
        i = indexFound
      }
      result = result.concat(str[i])
    }

  }

  return result
}
