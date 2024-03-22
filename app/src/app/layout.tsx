import type { Metadata } from 'next';
import { Outfit, Manrope, Inconsolata } from 'next/font/google';
import '@/styles/globals.scss';
import Header from '../components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { GoogleAnalytics } from '@next/third-parties/google';

import CookieConsent from '../components/Cookies/Cookies';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
const inconsolata = Inconsolata({
	subsets: ['latin'],
	variable: '--font-inconsolata'
});

export const metadata: Metadata = {
	title: 'Cure51',
	description: 'We are Cure51. We want every patient to become an Outlier.',
	icons: {
		icon: 'favicon.svg'
	}
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head></head>
			<body
				className={`${outfit.variable} ${manrope.variable} ${inconsolata.variable}`}
			>
				<CookieConsent />
				<Header />
				{children}
				<Footer />
				<GoogleAnalytics gaId="G-FKQ2PJBN4Z" />
			</body>
		</html>
	);
}
