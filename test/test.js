const { assert } = require('chai');
const noParen = require('..');

describe('noParen', () => {
  it('should define a getter and a setter on the global object', () => {
    let myVar;
    noParen(globalThis, 'someFunction', (value) => {
      myVar = value;
    });
    someFunction = [
      ['1', 2, 'three', [4]],
    ];
    someFunction; // eslint-disable-line no-unused-expressions

    assert.deepEqual(myVar, ['1', 2, 'three', [4]]);
  });
});
