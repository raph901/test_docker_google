import React from 'react';
import styles from './MenuMobile.module.scss';
import { motion } from 'framer-motion';
import Link from 'next/link';
interface MenuMobileProps {
	open: boolean;
	setOpen: (open: boolean) => void;
}

function MenuMobile({ open, setOpen }: MenuMobileProps) {
	const links = [
		{
			name: 'About Us',
			href: '/about-us'
		},
		{
			name: 'Press',
			href: '/press'
		},
		{
			name: 'Careers',
			href: '/careers'
		},
		{
			name: 'Contact',
			href: '/contact-us'
		}
	];

	const subLinks = [
		{
			name: 'Privacy policy',
			href: '/#'
		},
		{
			name: 'Cookie policy',
			href: '/#'
		},
		{
			name: 'Terms of use',
			href: '/#'
		}
	];

	const childVariant = {
		hidden: { y: 100 },
		show: {
			y: 0
		}
	};
	return (
		<div className={styles.menuMobile}>
			<div className={styles.pagesLinkContainer}>
				<ul className={styles.menuList}>
					{links.map((link, index) => (
						<Link
							key={index}
							href={link.href}
							onClick={() => setOpen(false)}
						>
							<motion.li
								style={{
									overflow: 'hidden'
								}}
							>
								<motion.p
									initial="hidden"
									animate={open ? 'show' : 'hidden'}
									transition={{
										delay: index * 0.2,
										duration: 0.5
									}}
									variants={childVariant}
								>
									{link.name}
								</motion.p>
							</motion.li>
						</Link>
					))}
				</ul>
				<ul className={styles.subMenuList}>
					{/*{subLinks.map((link, index) => (*/}
					{/*	<motion.li*/}
					{/*		key={index}*/}
					{/*		style={{*/}
					{/*			overflow: 'hidden'*/}
					{/*		}}*/}
					{/*	>*/}
					{/*		<motion.p*/}
					{/*			initial="hidden"*/}
					{/*			animate={open ? 'show' : 'hidden'}*/}
					{/*			transition={{*/}
					{/*				delay:*/}
					{/*					links.length * 0.2 + index * 0.2 + 0.3,*/}
					{/*				duration: 0.5*/}
					{/*			}}*/}
					{/*			variants={childVariant}*/}
					{/*		>*/}
					{/*			{link.name}*/}
					{/*		</motion.p>*/}
					{/*	</motion.li>*/}
					{/*))}*/}
				</ul>
			</div>
		</div>
	);
}

export default MenuMobile;
