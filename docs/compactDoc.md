##Compact

###`compact(array)`

Creates a new array with all falsey values removed.  False, 0, '', undefined, null, and NaN are falsey.

###Arguments

array (Array): The array to process.

###Returns

(Array): The new array with falsey values removed.

###Example

```javascript
compact( [ false, null, 5, 0, "", undefined, true, NaN, 'Devon' ] )
//=>['5, true, Devon']

```
