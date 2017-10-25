const Auth0Strategy = require('passport-auth0'),
    config = require('./config')

    module.exports = new Auth0Strategy(
      Object.assign({}, config, {callbackURL: '/login'}),
      function(accessToken, refreshToken, extraParams, profile, done) {
        done(null, profile);
      }
    )