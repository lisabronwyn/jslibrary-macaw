##Slice

###`slice(array,[start=0],[end=array.length])`

Creates an array taken from Array from Start to End indices.  Negative values for start and End are treated as an offset from the end of the Array.

###Arguments

array (Array): The array to slice.

start=0 (number): The start index.

end=array.length (number): The end index.

###Returns

(Array): Returns the sliced array.

###Example

```javascript
bland.slice( [1,2,3,4,5], 1, 3 )
//=>[2,3]

bland.slice( [1,2,3,4,5,6,7], -4, -1)
//=>[4,5,6]
```
