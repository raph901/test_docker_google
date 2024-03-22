'use client';
import React from 'react';

import styles from './NavBar.module.scss';
import { usePathname } from 'next/navigation';

import { LogoHome, Logo } from './Logo/Logo';
import { Menu } from './Menu/Menu';

const Navbar = () => {
	const pathname = usePathname();
	const isHome = pathname === '/';
	return (
		<nav className={styles.navbar}>
			{isHome ? <LogoHome /> : <Logo />}
			{/* <LogoHome /> */}
			<Menu />
		</nav>
	);
};

export default Navbar;
