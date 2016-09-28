#Fill

##Function Description

##fill(array, val, start = 0, end = array.length)

Replaces elements of an existing array with the given value from start to end.
###Arguments
Array
Variable or value to fill the array
Start is an optional start position in the array
End is an optional end position in the array

###Return

It returns an array with the replaced values

Example:

```javascript
var array = [1, 2, 3];

_.fill(array, 'a');
console.log(array);
// => ['a', 'a', 'a']

_.fill(Array(3), 2);
// => [2, 2, 2]

_.fill([4, 6, 8, 10], '*', 1, 3);
// => [4, '*', '*', 10]
```
