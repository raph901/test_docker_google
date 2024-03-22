'use client';
import React from 'react';

import Navbar from '../NavBar/Navbar';
import styles from './Header.module.scss';

const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.headerContainer}>
				<Navbar />
			</div>
		</div>
	);
};

export default Header;
