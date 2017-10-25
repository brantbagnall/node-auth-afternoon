const express = require('express');
const session = require('express-session');
const passport = require('passport');
const strategy = require('./strategy');

const app = express();

// middleware for passport sessions
app.use(passport.initialize());
app.use(passport.session());

app.use( session({
  secret: '@nyth!ng y0u w@nT',
  resave: false,
  saveUninitialized: true
}));

passport.use(strategy);

passport.serializeUser(function(user, done) {
  const { clientID, email, name, followers_url } = user._json;
  done(null, { clientID, email, name, followers_url });
})

passport.deserializeUser(function(obj, done) {
  done(null, obj);
})

app.get('/login', passport.authenticate('auth0'));


const port = 3000;
app.listen( port, () => { console.log(`Server listening on port ${port}`); } );