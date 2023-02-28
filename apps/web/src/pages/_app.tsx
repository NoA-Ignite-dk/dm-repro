import { AppProps } from 'next/app';
import Head from 'next/head';

import './global.scss';

function CustomApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Welcome to reproduction!</title>
			</Head>
			<main className="app">
				<Component {...pageProps} />
			</main>
		</>
	);
}

export default CustomApp;
