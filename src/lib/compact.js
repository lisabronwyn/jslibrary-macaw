const compact = arr => {
  const newArr = []

  arr.map( (x, i) => {
    if( !!x === true ) {
      newArr.push( x )
    }
  })

  return newArr
}

export default compact
