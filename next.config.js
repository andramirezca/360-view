const withSass = require('@zeit/next-sass');

module.exports = withSass({
  env: {
    API_PATH: process.env.API_PATH,
    API_CCMS: process.env.API_CCMS,
    LOCAL_URL: process.env.LOCAL_URL,
  },
});
