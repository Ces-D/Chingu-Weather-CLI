#!/usr/bin/env node

const weatherAPI = require("../lib/WeatherAPI");

if (process.argv[3]) {
    console.log("Sorry but only one location");
} else {
    const location = process.argv[2];
    weatherAPI(location)
}


