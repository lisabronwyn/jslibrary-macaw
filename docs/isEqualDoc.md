##IsEqual

###`isEqual(value, other)`

Compares two values to determine if they are equal.

###Arguments

value (\*): First value to compare.

other (\*): Second value to compare.

###Returns

(boolean): Returns true of the values are equal and false if they are not.

###Example

```javascript
let obj = { 'a': 1, 'b': 2 }
let other = { 'a': 1, 'b': 2 }

isEqual( obj, other )
//=> true

let bluther = { 'a': 1, b: 3 }
isEqual( obj, bluther )
//=> false
```
