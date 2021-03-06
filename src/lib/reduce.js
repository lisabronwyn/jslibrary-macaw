export default ( collection, iteratee, accumulator ) => {
  if ( Array.isArray( collection ) || typeof collection === 'object' ) {
    for ( let key in collection ) {
      accumulator = iteratee( accumulator, collection[ key ], key, collection )
    }
  } else {
    return ""
  }

  return accumulator
}
