#!/usr/bin/env node

const { program } = require("commander");
const pkg = require("../package.json");

program
    .version(pkg.version)
    .command("key", "Api Key - https://www.weatherapi.com/")
    .command("loc", "Get weather of a location")
    .parse(process.argv);
