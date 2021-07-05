#!/usr/bin/env node

const program = require("commander");
const chalk = require("chalk");
const clipboard = require("clipboardy");
const createPassword = require("./utils/createPassword");
const savePassword = require("./utils/savePassword");
program.version("1.0.0").description("Simple Command Line password Generator");

program
  .option("-l, --length <number>", "length of password", "8")
  .option("-s, --save", "save password to password.txt")
  .option("-nn, --no-numbers", "remove number from password")
  .option("-ns, --no-symbols", "remove symbols from password")
  .parse();

const { length, save, numbers, symbols } = program.opts();

// get generated password
const generatedPassword = createPassword(length, numbers, symbols);

clipboard.writeSync(generatedPassword);
if (save) {
  savePassword(generatedPassword);
}
console.log(chalk.blue("Generated Password: ") + chalk.bold(generatedPassword));
console.log(chalk.green("Password copied to clipboard"));
