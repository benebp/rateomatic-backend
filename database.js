const { MongoClient } = require('mongodb');
const databaseConfig = require('./configuration/database.json');
const databaseUrl = databaseConfig.db_url;

module.exports = async() => {
	let client;
	try {
		client = await MongoClient.connect(databaseUrl, { useUnifiedTopology: true });
		const db = client.db('rateomatic');
		console.log('connected to db');
		await db.collection('test').insertOne({ test: 1 });
		console.log(await db.collection('test').find()
			.toArray());
	} catch (err) {
		console.log(err.stack);
	}

	if (client) {
		client.close();
	}
};
