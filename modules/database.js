const { MongoClient } = require('mongodb');

module.exports = class Database {
	constructor({ config }) {
		this.config = config;
	}

	connectToDatabase({ connectionString, databaseName, collectionName }) {
		return new Promise((resolve, reject) => {
			MongoClient.connect(connectionString, { useUnifiedTopology: true },
				(err, client) => {
					if (err) {
						reject(err);
					}
					const db = client.db(databaseName);
					db.collection(collectionName, (err, collection) => {
						if (err) {
							reject(err);
						}
						resolve(collection);
					});
				});
		});
	}

	// get
	// set
	// update
	// delete
	// deleteAll
};
