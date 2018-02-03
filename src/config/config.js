/* globals __dirname, process */

const path = require('path');
const rootPath = path.normalize(__dirname + '/..');

// eslint-disable-next-line no-process-env
const env = process.env.NODE_ENV || 'dev';
// eslint-disable-next-line no-process-env
const envPort = process.env.PORT;
// eslint-disable-next-line no-process-env
const envCalaisAccessToken = process.env.CALAIS_ACCESS_TOKEN;

const config = {
	dev: {
		root: rootPath,
		app: {
			name: 'calais-api',
		},
		port: envPort || 3000,
		calais: {
			url: 'https://api.thomsonreuters.com/permid/calais',
			accessToken: envCalaisAccessToken || 'nSwPfkA6Z1j4JvbswQ2ONYZgkHnN2CTQ',
			contentType: 'text/raw',
			outputFormat: 'application/json',
		},
	},
	production: {
		root: rootPath,
		app: {
			name: 'calais-api',
		},
		port: envPort,
		calais: {
			url: 'https://api.thomsonreuters.com/permid/calais',			
			accessToken: envCalaisAccessToken,
			contentType: 'text/raw',
			outputFormat: 'application/json',
		},
	},
};

module.exports = config[env];
