
const replace = (str, pat, replace) => {
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
  // for (let i = 0; i < pat.length; i++) {
  //   for (j = 0; j < str.length; j++) {
  //     if (pat[i] != str[j]) {
  //       result.push(str[j])
  //     }
  //
  //   }
  //
  // }

  return result
}

export default replace
