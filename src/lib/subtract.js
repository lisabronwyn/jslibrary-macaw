export default ( num1, num2 ) => {

 if ( typeof num1 === 'number' && typeof num2 === 'number' ) {
 	return num1 - num2
 } else {
 	return 'One or both of the values is not a number.'
 }
}
