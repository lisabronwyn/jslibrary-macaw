##pick

###`pick(object,[props])`

Creates a new object composed of the properties listed in props, taken from object.

###Arguments

object (Object): The Object to pick from.
[props] (...(value)): The property identifiers to pick.

###Returns

(Object): New object composed of the picked properties.

###Example

```javascript
var object = { 'a': 1, 'b': '2', 'c': 3 };

pick(object,'a','c');
// => { 'a': 1, 'c': 3 }

pick(object,['a','c'])
// => { 'a': 1, 'c': 3 }
```
