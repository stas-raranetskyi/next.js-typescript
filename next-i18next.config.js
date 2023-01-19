const LocizeBackend = require('i18next-locize-backend/cjs');
/** @type {import('next-i18next').UserConfig} */
module.exports = {
	i18n: {
		defaultLocale: 'uk',
		locales: ['en', 'uk'],
	},
	backend: {
		projectId: process.env.NEXT_PUBLIC_LOCIZE_PROJECT_ID,
		version: process.env.NEXT_PUBLIC_LOCIZE_VERSION,
		referenceLng: 'en',
	},
	use: [LocizeBackend],
	ns: ['site-frontend'],
	defaultNS: 'site-frontend',
	serializeConfig: false,
};
