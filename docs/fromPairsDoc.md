#FromPairs

###`fromPairs(array)`

FromPairs takes an Array of key-value pairs and creates an Object based on those pairs.

###Arguments

array (Array): An Array of Arrays with key-value pairs.

###Return

An Object.

###Example:

```javascript
bland.fromPairs([['a',2],[5,"Muffins"]]
//=> {}'a':2 , 5:"Muffins"}

bland.fromPairs([['a',2,3,22,"hike"],[5,"Muffins"]]
//=> {}'a':2 , 5:"Muffins"}
```
