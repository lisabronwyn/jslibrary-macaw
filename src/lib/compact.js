const compact = arr => {
  const newArr = []

  for( let i of arr ) {
    if ( Boolean( i ) === true ) {
      newArr.push( i )
    }
  }

  return newArr
}

export default compact
