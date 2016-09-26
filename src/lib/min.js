const min = (arr) => {
	
	let num = arr[0]
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < num){
			num = arr[i]
		}
	}
	if ((typeof num != "number") && (typeof num != "string")) {
		return undefined
	}

	return num
}

export default min