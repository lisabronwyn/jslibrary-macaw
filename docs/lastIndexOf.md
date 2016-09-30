##lastIndexOf

###`lastIndexOf(array, value, [fromIndex = 0])`

Returns the index at which value is last found in array.  If fromIndex is given, it starts its search at that point.

###Arguments

array (Array): The array to search.

value : The value to search for.

fromIndex = 0 (number) : An optional start index

###returns

(number): Returns the index where value is found.

```javascript
bland.lastIndexOf([2,4,8,9,4],4)
// => 4

bland.lastIndexOf([2,4,8,9,4],4,2)
// => 2

```
