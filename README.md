# no-paren
Functions without parentheses
<hr>
This package is more of a proof-of-concept, and is not meant for use in actual projects as it can make code hard to maintain and read
<hr>

## Getting started

Make sure you have [Node][1] and [NPM][2] installed
Run `npm i no-paren` to install this package. Run the following code:

```javascript
const noParen = require('no-paren');

noParen( // Define the paren-less function
  globalThis, // Use global in NodeJS, window in a browser, or globalThis in either
  'error', // Function name
  console.error // The function to run
);
error = ['Error:', 'Something bad happened']; // Set the parameters
error; // Run the function
```

You should see the output "Error: Something bad happened".
You can find the docs at https://shreyasm-dev.github.io/no-paren/.


[1]: https://nodejs.org/
[2]: https://www.npmjs.com/
