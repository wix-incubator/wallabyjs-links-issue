module.exports = () => {
  return {
    env: {
      type: 'node',
      runner: 'node'
    },

    testFramework: 'jest',

    files: [
      'a.js',
      'b.js'
    ],
    tests: [
      // '*.very_weird_workaround',
      'a.test.js'
    ]
  };
};
