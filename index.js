const compiler = require('vanilla-dom')

module.exports = function(content) {
  let compiled = compiler.compile(content)
  return compiled
};
