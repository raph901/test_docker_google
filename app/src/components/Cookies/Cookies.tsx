'use client';
import React from 'react';
import { getCookie, hasCookie, setCookie } from 'cookies-next';
import styles from './Cookies.module.scss';
import Image from 'next/image';

const CookieConsent = () => {
	const [showConsent, setShowConsent] = React.useState(true);

	React.useEffect(() => {
		// console.log('COOKIE', getCookie('localConsent'));
		setShowConsent(hasCookie('localConsent'));
	}, []);

	const acceptCookie = () => {
		setShowConsent(true);
		setCookie('localConsent', 'true', {});
	};

	const declineCookie = () => {
		setShowConsent(true);
		setCookie('localConsent', 'false', {});
	};

	if (showConsent) {
		return null;
	}

	return (
		<div
			// className="fixed inset-0 bg-slate-700 bg-opacity-70"
			className={styles.container}
		>
			<div
				// className="fixed bottom-0 left-0 right-0 flex items-center justify-between px-4 py-8 bg-gray-100"
				className={styles.subContainer}
			>
				<div className={styles.cookiesContainer}>
					<div className={styles.logoContainer}>
						<Image
							className={styles.logo}
							src="/images/CURE51_Logo_Orange.svg"
							width={90}
							height={29}
							alt="logo"
						/>
					</div>
					<div className={styles.textContainer}>
						<p className={styles.text}>
							By clicking “Accept All Cookies”, you agree to the
							storing of cookies on your device to enhance site
							navigation, analyze site usage, and assist in our
							marketing efforts.
						</p>
					</div>
					<div className={styles.acceptContainer}>
						<button
							className={styles.acceptButton}
							onClick={() => acceptCookie()}
						>
							Accept All Cookies
						</button>
					</div>
					<div className={styles.declineContainer}>
						<button
							className={styles.declineButton}
							onClick={() => declineCookie()}
						>
							Reject All
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CookieConsent;
