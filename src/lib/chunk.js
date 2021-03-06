export default ( arr, split ) => {
  if (!Array.isArray(arr)) {
    return undefined
  }

let chunks = [],
      i = 0,
      j = arr.length;

  while (i < j) {
    chunks.push(arr.slice(i, i += split));
  }

  return chunks;
}
