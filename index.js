const awilix = require('awilix');
const Database = require('./modules/database');
const User = require('./modules/user');

const container = awilix.createContainer({ injectionMode: awilix.InjectionMode.PROXY });

container.register({
	user: awilix.asClass(User),
	database: awilix.asClass(Database),
});
