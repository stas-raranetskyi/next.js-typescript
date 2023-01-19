import Head from 'next/head';
import { GetStaticProps } from 'next/types';
import { useTranslation } from 'next-i18next';

import { getStaticPropsLocize } from '@/helpers/locize';
import styles from '@/styles/Home.module.scss';

export default function Home() {
	const { t, ready } = useTranslation();
	if (!ready) return 'loading translations...';
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>Index page {t('test')}</main>
		</>
	);
}

export const getStaticProps: GetStaticProps<{}> = getStaticPropsLocize();
