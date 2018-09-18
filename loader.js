const server = require('./config/server')
require('./config/database')
require('./user/usersService')(server);