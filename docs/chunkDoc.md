##chunk

###`chunk(array,[size=1])`

Creates an array of elements split into length Size.  If array cannot be split evently, the final chunk with hold the remaining values.

###Arguments

array (Array): The array to process.

size=1 (number): The length of the chunks.

###Returns

(Array): Returns a new array of chunks.

###Example

```javascript

bland.chunk( ['a', 'b', 'c', 'd'], 2)
//=>[ ['a', 'b'] , ['c', 'd'] ]

bland.chunk( ['a', 'b', 'c', 'd'], 3)
//=>[ ['a', 'b', 'c'], ['d'] ]
```
