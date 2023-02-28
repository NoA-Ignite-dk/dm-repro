const BASE_URL =
	process.env.NEXT_PUBLIC_BASE_URL ||
	(process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : false) ||
	'http://localhost:4200';

const Config = {
	BASE_URL,
	APP_ENV: process.env.NEXT_PUBLIC_APP_ENV || 'local',
};

export default Config;
