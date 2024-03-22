import React from 'react';
import styles from './CenterWrapper.module.scss';

type Props = {
	children: React.ReactNode;
};

const CenterWrapper = ({ children }: Props) => {
	return (
		<main className={styles.mainWrapper}>
			<div className={styles.centerWrapper}> {children} </div>
		</main>
	);
};

export default CenterWrapper;
