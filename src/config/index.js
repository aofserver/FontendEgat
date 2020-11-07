var env = process.env.NODE_ENV || 'development'

var config = {
  development: {
      server: 'http://localhost:8000'
  },
  production: {
      server: '#'
  },

}

module.exports = config[env]