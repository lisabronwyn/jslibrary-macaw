const join = ( arr, sep ) => {
  let output = ''
  for( let i = 0; i < arr.length; i++ ) {
    if ( i === arr.length - 1 ) {
      output += `${arr[i]}`
    } else {
      output += `${arr[i]}${sep}`
    }
  }
  return output
}

export default join