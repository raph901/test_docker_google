'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Menu.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import MenuMobile from './MenuMobile/MenuMobile';
import { useEffect, useState } from 'react';

export const Menu = () => {
	const pathname = usePathname();

	const isContactUs = pathname === '/contact-us';
	const isPress = pathname === '/press';
	const isAboutUs = pathname === '/about-us';
	const isCareers = pathname === '/careers';

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const isHomePage = !(isContactUs || isPress || isAboutUs || isCareers);

	useEffect(() => {
		document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
	}, [isMobileMenuOpen]);
	return (
		<>
			{/* MENU DESKTOP */}
			<div className={styles.menu_desktop}>
				<motion.ul
					className={styles.list}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						delay: isHomePage ? 2.75 : 0,
						duration: isHomePage ? 1 : 0
					}}
				>
					{/* <li className={styles.item}>
                    <Link className={styles.link} href='#'>About Us</Link>
                </li> */}
					<li className={styles.itemWithBorder}>
						<Link
							className={`${styles.link} ${styles.contact}`}
							style={{ color: isAboutUs ? '#f05801' : '' }}
							href="/about-us"
						>
							About us
						</Link>
					</li>

					<li className={styles.itemWithBorder}>
						<Link
							className={`${styles.link} ${styles.contact}`}
							style={{ color: isPress ? '#f05801' : '' }}
							href="/press"
						>
							Press
						</Link>
					</li>

					<li className={styles.itemWithBorder}>
						<Link
							className={`${styles.link} ${styles.contact}`}
							style={{ color: isCareers ? '#f05801' : '' }}
							href="/careers"
						>
							Careers
						</Link>
					</li>

					<li
						className={styles.item}
						style={{
							border: isContactUs ? '1px solid #f05801' : ''
						}}
					>
						<Link
							className={`${styles.link} ${styles.contact}`}
							style={{ color: isContactUs ? '#f05801' : '' }}
							href="/contact-us"
						>
							Contact Us
						</Link>
					</li>
				</motion.ul>
			</div>

			{/* MENU MOBILE */}
			<motion.div
				className={styles.menu_mobile}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 2.75, duration: 1 }}
			>
				<div
					onClick={() => {
						setIsMobileMenuOpen(!isMobileMenuOpen);
					}}
				>
					{isMobileMenuOpen ? (
						<Image
							className={styles.logo__img}
							src="/images/cross.svg"
							alt="logo"
							width={48}
							height={48}
						/>
					) : (
						<Image
							className={styles.logo__img}
							src="/images/hamburger.svg"
							alt="logo"
							width={48}
							height={48}
						/>
					)}
				</div>

				{/* <ul className={styles.list}>
                <li className={styles.item}>
                    <Link className={styles.link} href='#'>About Us</Link>
                </li>
                <li className={styles.item}>
                    <Link className={`${styles.link} ${styles.contact}`} href='#'>Contact Us</Link>
                </li>
                </ul> */}
			</motion.div>
			<motion.div
				className={styles.menuMobileContainer}
				style={{
					x: isMobileMenuOpen ? '0%' : '100%',
					transition: '1s'
				}}
			>
				<MenuMobile
					open={isMobileMenuOpen}
					setOpen={setIsMobileMenuOpen}
				/>
			</motion.div>
		</>
	);
};
