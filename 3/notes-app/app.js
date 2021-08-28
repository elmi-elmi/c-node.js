const getNotes = require('./notes.js')
const chalk = require('chalk')

getNotes()

console.log(chalk.green('Success!'))
console.log(chalk.inverse.bold.red('Success!'))