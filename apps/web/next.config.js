const path = require('path');
const withNx = require('@nrwl/next/plugins/with-nx');
const { patchWebpackConfig } = require('next-global-css');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 */
const nextConfig = {
	swcMinify: true,
	outputFileTracing: true,
	productionBrowserSourceMaps: true,
	sassOptions: {
		includePaths: ['node_modules'],
	},
	nx: {
		svgr: true,
	},
	/**
	 * @type {import('@sentry/nextjs/types/config/types').UserSentryOptions}
	 */
	experimental: {
		// This fixes https://github.com/mswjs/msw/issues/1435
		esmExternals: false,
		// this includes files from the monorepo base two directories up
		outputFileTracingRoot: path.join(__dirname, '../../'),
	},
	env: {
		NEXT_PUBLIC_API_MOCKING: isE2ETask() ? 'enabled' : undefined,
	},
	webpack: (config, options) => {
		patchWebpackConfig(config, options);

		return config;
	},
};

module.exports = withNx(nextConfig);

function isE2ETask() {
	try {
		const args = process.argv.slice(2)[0];

		if (args) {
			const value = JSON.parse(args);
			if (value.targetDescription.target === 'e2e') {
				return true;
			}
		}
	} catch (e) {
		return false;
	}

	return false;
}
