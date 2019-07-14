let env = process.env.NODE_ENV;

let config = {}

config.SERVER_URL = {
  production: "https://server1.viewbox.io",
  development: "http://localhost:9090"
};

const SERVER_URL = config.SERVER_URL[env];

export const SERVER_URL_LOCAL = SERVER_URL;

