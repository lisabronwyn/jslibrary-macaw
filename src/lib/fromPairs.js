const fromPairs = (arr) => {
  let result = {}
  for (let i of arr) {
    result[i[0]] = i[1]
  }

	return result
}

export default fromPairs
