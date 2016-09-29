export default ( arr ) => {
  const newArray = []

  if ( Array.isArray(arr) || typeof arr === "string" ) {
    for ( let i of arr ) {
      if ( !Array.isArray(i) ) {
       newArray.push( i )
      } else {
        for ( let j of i ) {
         newArray.push( j )
        }
      }
    }
    return newArray
  }

 return []
}
