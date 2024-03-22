import Link from 'next/link';
import styles from './Footer.module.scss';

export const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.title}>
					<p className={styles.weAre}>We are Cure51.</p>
					<p className={styles.weWant}>Hope is for everyone.</p>
				</div>
				<div className={styles.links}>
					<div className={styles.row1}>
						<Link href="/about-us">About Us</Link>
						<Link href="/press">Press</Link>
						<Link href="/careers">Careers</Link>
						<Link href="/contact-us">Contact Us</Link>
					</div>
					<div className={styles.row2}>
						<Link href="">Manage Cookie</Link>
						{/*<Link href="">Legal</Link>*/}
						{/*<Link href="">Privacy</Link>*/}
					</div>
					<div className={styles.row3}>
						© 2024 CURE51, All Rights Reserved
					</div>
				</div>
			</div>
		</div>
	);
};
