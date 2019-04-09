let fs = require('fs')
let util = require('util');

let colors = require('./colors.json');
let prepareSyntaxTheme = require('./syntaxTokensTheme.js');
let color = require('./colorUtils');


let tokenTheme = prepareSyntaxTheme({
  errorColor: color.hslToHex(colors.red),
  textColor: color.hslToHex(colors.text),
  commentColor: color.hslToHex(colors.text),
  functionColor: color.hslToHex(colors.blue),
  keywordColor: color.hslToHex(colors.yellow),
  stringColor: color.hslToHex(colors.cyan),
  typeColor: color.hslToHex(colors.magenta)
});

let writeToFile = util.promisify(fs.writeFile);

writeToFile('testfile.json', JSON.stringify(tokenTheme))
  .finally(() => console.log('File has been created.'))