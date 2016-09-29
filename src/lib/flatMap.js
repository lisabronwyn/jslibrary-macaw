import flatten from './flatten'

export default ( collection, iteratee ) => {
  if ( Array.isArray( collection ) ) {
    var newArray = []

    for ( let index = 0; index < collection.length; index++) {
      newArray.push(
        iteratee( collection[ index ], index, collection )
      )
    }
  } else {
    return 'The Collection is not an Array'
  }


  return flatten( newArray )   
}
