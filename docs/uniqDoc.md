##Uniq

###`_.uniq(array)`

Creates a duplicate-free version of an array in which only the first occurrence of each element is kept. The order of result values is determined by the order in which they occur in the array.

-

###Arguments

array (Array): The array to inspect.

values (...Array): The values to iterate through to determine which ones are duplicates, removing the duplicates and then placing the result values in the order in which they occur in the array.

###Returns

(Array): Returns the new filtered array.

###Example

```javascript
_.uniq([2, 1, 2]);
// => [2, 1]

```
