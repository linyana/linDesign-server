let config;
const env = process.env.NODE_ENV ?? "local";

if (env === "local") {
    config = require("./getConfig");
} else {
    config = require(`./getConfig.${env}`);
}

module.exports = config;