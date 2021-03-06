export default ( value, compare, check, counter = 0 ) => {

  if ( value.length != compare.length ) { return false }

  for ( let k in value ) {
    check = false

    for ( let key in compare ) {
      if ( Array.isArray( value ) && Array.isArray( compare ) ) {
        value[ k ] === compare[ key ] ? check = true : ''
      } else {
        if( k === key && value[ k ] === compare[ key ] ){ check = true }
      }
    }

    check ? counter++ : ''
  }

  if ( Array.isArray( value ) && Array.isArray( compare ) ) {

    return counter == value.length ? true : false
  } else {

    return counter == Object.keys( value ).length ? true : false
  }
}
