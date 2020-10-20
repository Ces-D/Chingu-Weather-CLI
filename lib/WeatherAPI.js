const axios = require("axios");
const chalk = require("chalk");
require("dotenv").config();

let weather = (location) => {
    axios
        .get("https://api.weatherapi.com/v1/current.json", {
            params: {
                q: location,
                key: process.env.API_KEY,
            },
        })
        .then((res) => {
            handleResponse(res.data);
        })
        .catch((err) => {
            console.log(
                `Request Status ${chalk.red(err.response.status)}: ${
                    err.response.statusText
                }`
            );
        });
};

function handleResponse(res) {
    console.log(
        `\nLocation: ${chalk.yellow(res.location.name)}, ${chalk.yellow(
            res.location.region
        )}\n          ${chalk.yellow(
            res.location.country
        )}\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
    );
    console.log(
        `Latitude: ${chalk.yellow(res.location.lat)}\nLongitude: ${chalk.yellow(
            res.location.lon
        )}\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
    );
    console.log(
        `Temperature: ${chalk.blue(res.current.temp_c)} C | ${chalk.blue(
            res.current.temp_f
        )} F`
    );
    console.log(`Condition: ${chalk.blue(res.current.condition.text)}\n`);
}

module.exports = weather;
