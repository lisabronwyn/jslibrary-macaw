##Min

###`min(array)`

Computes the minimum value of array. If array is empty or falsey, undefined is returned.

###Arguments

array (Array): The array to search.

###returns

value (\*): Returns the minimum value.

```javascript
min([9, 2, 3, 5])
// => 2

min([])
// => undefined

min([null, null])
// => undefined

min([3, "2", 4])
// => "2"
```
