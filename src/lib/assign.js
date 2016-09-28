export default ( obj, ...args ) => {

  for( let val of args  ) {
    for( let key in val ) {
      obj[ key ]  = val[ key ]
    }
  }

  return obj
}
