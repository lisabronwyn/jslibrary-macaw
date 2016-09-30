export default (arr) => {
  let result = []

  if (Array.isArray(arr)) {
    for (let i in arr) {
      let found = false
      for (let j in result) {
        if (arr[i] == result[j]) {found = true}
      }
    if (!found) {
      result.push(arr[i])
    }
    }

  } return result
}
