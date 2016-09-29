const head = (arr) => {

  if(typeof arr === 'string') {
 	arr = arr.split('')
  } 

  if (Array.isArray(arr)) {
  	return arr[0]
  }

}

export default head
