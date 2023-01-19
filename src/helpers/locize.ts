import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticPropsLocize =
	(ns: string[] = ['site-frontend']): GetStaticProps<{}> =>
	async ({ locale }) => {
		return {
			props: {
				...(await serverSideTranslations(locale || 'uk', ns)),
			},
		};
	};
