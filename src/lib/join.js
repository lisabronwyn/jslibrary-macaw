export default ( arr, sep, output = '' ) => {
  for( let i = 0; i < arr.length; i++ ) {
    if ( i === arr.length - 1 ) {
      output += `${arr[i]}`
    } else {
      output += `${arr[i]}${sep}`
    }
  }
  return output
}
