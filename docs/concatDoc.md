#Concat

###`concat(array,[values])`

FromPairs takes an Array of key-value pairs and creates an Object based on those pairs.

###Arguments

array (Array): An array to concatenate to.
values: The values to concatenate.


###Return

(Array): Returns the new concatenated array.

###Example:


Example:

```javascript
concat([1,2,3],4,5)
//=> [1,2,3,4,5]

concat([1,2,3], [4], 5, ['six', 7])
//=> [1,2,3,4,5,'six',7]
```
