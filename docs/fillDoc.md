#Fill

###`fill(array, value, [start = 0], [end = array.length])`

Replaces elements of an existing array with the given value from start index to end index.

###Arguments
array (Array): An array to fill

value: Value to fill the array

start = 0 (number): An optional start index in the array

end = array.length (number): An optional end index in the array

###Return

It returns an array with the replaced values

###Example:

```javascript
_.fill([1,2,3], 'a');
console.log(array);
// => ['a', 'a', 'a']

_.fill(Array(3), 2);
// => [2, 2, 2]

_.fill([4, 6, 8, 10], '*', 1, 3);
// => [4, '*', '*', 10]
```
