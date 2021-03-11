const argList = {}; // List of function arguments

module.exports = (globalObj, functionName, func) => {
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
