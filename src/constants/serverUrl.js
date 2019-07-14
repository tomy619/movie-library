let env = process.env.NODE_ENV;

let config = {}

config.SERVER_URL = {
  production: "https://movie-library-server.herokuapp.com",
  development: "http://localhost:8080"
};

const SERVER_URL = config.SERVER_URL[env];

export const SERVER_URL_LOCAL = SERVER_URL;

