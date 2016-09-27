// let obj = { 'a': 1, 'b': 2 }
// let other = { 'a': 1, 'b': 2 }

const isEqual = ( value, compare ) => {

  if ( value.length != compare.length ) { return false }

  let check
  let counter = 0

  for ( let k in value ) { // k => 2
    check = false

    for ( let key in compare ) { // key => 2
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

export default isEqual
