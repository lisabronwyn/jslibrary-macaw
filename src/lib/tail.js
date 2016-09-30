const tail = (arr) => {

  if(typeof arr === 'string') {
 	arr = arr.split('')
  } 

  if (Array.isArray(arr)) {
  	return arr[arr.length-1]
  }

}

export default tail
