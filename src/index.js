const session = require('express-session');

function sessionMiddleware() {
  return session({ secret: 'fixture-only-secret', resave: false, saveUninitialized: false });
}

module.exports = { sessionMiddleware };
