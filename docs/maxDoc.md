##Max

###`max(array)`

Computes the maximum value of array. If array is empty or falsey, undefined is returned.

###Arguments

array (Array): The array to search.

###returns

value (\*): Returns the maximum value.

```javascript
bland.max([9, 2, 3, 5])
// => 9

bland.max([])
// => undefined

bland.max([null, null])
// => undefined

bland.max([3, 2, '4'])
// => '4'
```
