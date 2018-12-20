#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
var chalk = require("chalk");
var boxen = require("boxen");

// Define options for Boxen
let options = {
  padding: 1,
  margin: 1,
  borderStyle: "round"
};
// Text + chalk definitions
let data = {
  name: chalk.white("Nico Koenig"),
  work: chalk.white("Freelance developer, consultant and trainer"),
  twitter: chalk.cyan("https://twitter.com/theNicoKoenig"),
  github: chalk.cyan("https://github.com/nicokoenig"),
  codepen: chalk.cyan("https://codepen.io/nicokoenig"),
  web: chalk.cyan("https://koenig.codes"),
  npx: chalk.white("npx nicokoenig"),
  labelWork: chalk.white.bold("      Work:"),
  labelTwitter: chalk.white.bold("   Twitter:"),
  labelGitHub: chalk.white.bold("    GitHub:"),
  labelWeb: chalk.white.bold("       Web:"),
  labelCodepen: chalk.white.bold("   Codepen:"),
  labelCard: chalk.white.bold("      Card:")
};

// Actual strings we're going to output
var newline = "\n";
var heading = `${data.name}`;
var working = `${data.labelWork}  ${data.work}`;
var twittering = `${data.labelTwitter}  ${data.twitter}`;
var githubing = `${data.labelGitHub}  ${data.github}`;
var codepening = `${data.labelCodepen}  ${data.codepen}`;
var webing = `${data.labelWeb}  ${data.web}`;
var carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
let output =
  heading +
  newline +
  newline +
  working +
  newline +
  twittering +
  newline +
  githubing +
  newline +
  codepening +
  newline +
  newline +
  webing +
  newline +
  newline +
  carding;

console.log(chalk.green(boxen(output, options)));
