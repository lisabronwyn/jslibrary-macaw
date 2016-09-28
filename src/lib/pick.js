const pick = ( obj, arr, newObj = {} ) => {
  for ( let i of arr ) {
    for ( let key in obj ) {
      if ( i  === key  ) {
        newObj[ i ] = obj[ i ]
      }
    }
  }

  return newObj
}

export default pick
