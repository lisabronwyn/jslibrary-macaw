##Join

###`join(array,[separator=','])`

Combines elements of array into a string, separated by separator.

###Arguments

array (Array): The array to convert.

separator=',' (string): The element separator.

###Returns

(string): Returns the joined string.

###Example

```javascript
bland.join(['a','b','c'])
//=>'a,b,c'

bland.join( ['a', 'b', 'c'], '~' )
//=>'a~b~c'
```
