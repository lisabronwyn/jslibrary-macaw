#FromPairs

##fromPairs(array)

FromPairs takes an array of arrays and creates an Object based on those arrays.
###Arguments
An Array of arrays with key-value pairs.

###Return

An Object.

Example:

```javascript
fromPairs([['a',2],[5,"Muffins"]]
//=> {}'a':2 , 5:"Muffins"}

fromPairs([['a',2,3,22,"hike"],[5,"Muffins"]]
//=> {}'a':2 , 5:"Muffins"}
```
