const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_SERVER } = require('next/constants');

module.exports = (phase) => {
  // DEV
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        // only for env variables that are not sensitive info
      },
    };
  } else if (phase === PHASE_PRODUCTION_SERVER) {
    // PROD
    return {
      env: {
        // only for env variables that are not sensitive info
      },
    };
  }
};
