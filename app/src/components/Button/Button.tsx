import React from 'react';
import styles from './Button.module.scss';

type Props = {
	label: string;
};

const Button = ({ label }: Props) => {
	return (
		<div className={styles.titleContainer}>
			<span className={styles.title}>{label}</span>
		</div>
	);
};

export default Button;
