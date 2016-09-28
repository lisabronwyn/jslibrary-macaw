export default ( arr ) => {
  const newArr = []

  for ( let i = 0; i < arr.length; i++ ) {
    if( !!arr[ i ] === true ) {
      newArr.push( arr[ i ] )
    }
  }

  return newArr
}
