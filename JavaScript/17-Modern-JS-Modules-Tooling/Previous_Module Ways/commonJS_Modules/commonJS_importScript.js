console.log('CommonJS Import Module');

// The 'require()' is available in node.js only.
// node uses CommonJS modules as well,
// not available in browsers and JavaScript.

// '.cjs','.mjs', '.json', '.node', '.js'
// extensions recognized as CommonJS modules
// when included via require(), and
// 'type' is 'module'

// by default '.cjs' with 'type' 'commonjs'
// in package.json is recognized as CommonJS module.

const { carIntro } = require('./commonJS_exportScript.js');

console.log(carIntro('Maruti', '800'));
