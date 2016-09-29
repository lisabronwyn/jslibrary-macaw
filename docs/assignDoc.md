##Assign

###`assign(object, [sources])`

Assigns series of keyed values to the given Object.

###Arguments

object(Object): The Object to modify.

sources (...Object): Any number of Objects to add.

###Returns

(Object): Returns modified object.

###Example

```javascript
const Foo = function() { this.a = 4 }
const obj2 = { 'c': 'muffins' }

bland.assign( { 'a': 0, 'c': 3 }, new Foo, obj2 )
//=>{ 'a': 4, 'c': 'muffins' }

```
