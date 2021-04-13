const awilix = require('awilix');
const User = require('./modules/user');

const container = awilix.createContainer({ injectionMode: awilix.InjectionMode.PROXY });

container.register({ user: awilix.asClass(User) });
