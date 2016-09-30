## Description

Create a library of JavaScript/JQuery/Lodash methods with documentation and commenting using ES2015. Publish the code as a package to NPM.

## Context

This goal is important for:
- learning JavaScript
- understanding how developer write higher-level code for others to use
- understanding ES2015

This code will be used by other developers to make their jobs easier.

The questions that this project will raise are:
- how do we write packages that are easy to understand and simple to use out of the box?
- how to publish a package to NPM?

## Specifications

### Required

- [x] Includes a list of 20 commonly used methods to rewrite in ES2015.
- [x] Includes a README that describes each method and provides an example of use.
- [x] Package is published with NPM.
- [x] Includes tests for all methods described.
- [x] The artifact produced is properly licensed, preferably with the [MIT license][mit-license].

---

##Npm package
https://www.npmjs.com/package/bland-macaw

##Reduce

###`reduce( array | object )`

Reduces collection to a value which is the accumulated result of running each element in collection thru iteratee, where each successive invocation is supplied the return value of the previous. If accumulator is not given, the first element of collection is used as the initial value. The iteratee is invoked with four arguments:
(accumulator, value, index|key, collection).

###Arguments

collection: (Array|Object): The collection to iterate over.
iteratee: (Function): The function invoked per iteration.
accumulator(\*): The initial value.

###Returns

(\*): Returns the accumulated value.

###Example

```javascript
bland.reduce([1, 2], function(sum, n) {
  return sum + n;
}, 0);
// => 3

bland.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
  (result[value] || (result[value] = [])).push(key);
  return result;
}, {});
// => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)

```

##Replace


###`replace(string, pattern, replacement)`

Looks for pattern in a given string and replaces it with a new string.

###Arguments
string (String): The string to modify.

pattern (String): A pattern to search for in the string.

replacement (String): A string to replace the pattern with.

###Return

(String): It returns a string with a replaced value

###Example:

```javascript
bland.replace('Hello world', 'world', 'Lisa')
//=> 'Hello Lisa'

bland.replace('aaaaab', 'aab', ' hi')
//=> 'aaa hi'
```

##LastIndexOf

###`bland.lastIndexOf(array, value, [fromIndex=array.length-1])`

This method is like bland.indexOf except that it iterates over elements of array from right to left.

###Arguments

array (Array): The array to inspect.
value (\*): The value to search for.
fromIndex=array.length-1 (number): The index to search from.

###returns

(number): Returns the index of the matched value, else -1.

```javascript
bland.lastIndexOf([1, 2, 1, 2], 2);
// => 3

// Search from the `fromIndex`.
bland.lastIndexOf([1, 2, 1, 2], 2, 2);
// => 1
```

##Uniq

###`bland.uniq(array)`

Creates a duplicate-free version of an array, using SameValueZero for equality comparisons, in which only the first occurrence of each element is kept. The order of result values is determined by the order they occur in the array.

###Arguments

array (Array): The array to inspect.

###returns

(Array): Returns the new duplicate free array.

```javascript
bland.uniq([2, 1, 2]);
// => [2, 1]
```

<!-- LICENSE -->

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png" /></a>
<br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.

[mit-license]: https://opensource.org/licenses/MIT
