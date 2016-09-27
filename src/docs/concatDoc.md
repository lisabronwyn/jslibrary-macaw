#Concat

##Function Description

##Creates a new array that concatenates elements that might include arrays and/or values, merging them together in that new array.

##Function Technical Explanation

Concat takes an arbitrary number of arguments. The first argument is the array will be combined with the second argument. The second argument contains elements that will be added onto the first array given as the first argument.

First, we check if the array given contains an array. If so, we push that result into an empty results array that we will use to continue to push the remaining elements into. We create a for loop in order to check if the given arguments are an array.

If they are, we loop through each element within the array and push it into results. If the element given as any argument is not an array, we push it to the results array. Finally, once we iterate through all the secondary arguments we return the results array with all the added elements.

Example:

```javascript
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);

console.log(other);
// => [1, 2, 3, [4]]

console.log(array);
// => [1]
```
