const argList = {}; // List of function arguments

/**
 * noParen function
 * @param {Object} globalObj
 * @param {String} functionName
 * @param {Function} func
 */

const noParen = (globalObj, functionName, func) => {
  Object.defineProperty(
    globalObj,
    functionName,
    {
      get: () => func( // Run function
        ...(
          Array.isArray(argList[functionName]) && argList[functionName] // Basic type-checking
        ) || [],
      ),
      set: (args) => {
        argList[functionName] = args; // Set parameters
      },
    },
  );
};

module.exports = noParen;
