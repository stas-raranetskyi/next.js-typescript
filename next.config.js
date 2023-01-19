const { i18n } = require('./next-i18next.config');
/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	basePath: '',
	i18n,
};

module.exports = nextConfig;
