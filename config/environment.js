/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'intecmedics',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    firebase: 'https://intecmedics-dev.firebaseio.com/',
    torii: {
      sessionServiceName: 'session'
    },
    contentSecurityPolicy: {
      /* jshint ignore:start */
      'default-src': "'none'",
      'script-src': "'self'",
      'font-src': "'self' data: http://fonts.gstatic.com https://fonts.gstatic.com",
      'connect-src': "'self' https://auth.firebase.com https://*.firebaseio.com wss://*.firebaseio.com",
      'img-src': "'self' data:",
      'media-src': "'self'"
      /* jshint ignore:end */
    },
    'ember-devtools': {global: 'devTools', enabled: environment !== 'production'},
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.firebase = 'https://intecmedics.firebaseio.com/';
  }

  return ENV;
};
