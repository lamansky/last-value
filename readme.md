# last-value

Retrieves the last value of an Array, Iterator, Object, Map, Set, or Typed Array.

Returns `undefined` if the collection is empty.

## Installation

Requires [Node.js](https://nodejs.org/) 7.0.0 or above.

```bash
npm i last-value
```

## API

The module exports a single function.

### Parameter

Bindable: `c` (Array, Iterator, Object, Map, Set, or Typed Array): The collection of entries/values.

### Return Value

The last value in the collection.

## Example

```javascript
const lastValue = require('last-value')

lastValue([1, 2, 3]) // 3
lastValue({a: 1, b: 2}) // 2

// Supports the bind operator
[1, 2, 3]::lastValue() // 3
```

## Related

* [first-value](https://github.com/lamansky/first-value)
