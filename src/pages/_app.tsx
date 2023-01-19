import '@/styles/globals.scss';

import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { Provider } from 'react-redux';

import MainLayout from '@/components/MainLayout';
import { store } from '@/store';

import nextI18NextConfig from '../../next-i18next.config.js';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<Provider store={store}>
			<MainLayout>
				<Component {...pageProps} />
			</MainLayout>
		</Provider>
	);
};

export default appWithTranslation(App, nextI18NextConfig);
