'use client';
import React, { useEffect, useState } from 'react';
import styles from './Section.module.scss';
import { motion } from 'framer-motion';

type Props = {
	children: React.ReactNode;
	title: string;
	startTransition: boolean;
};

const Section = ({ children, title, startTransition }: Props) => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		window.addEventListener('resize', handleResize);
		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);
	return (
		<div className={styles.mainWrapper}>
			{/* Title */}
			<div className={styles.title}>
				<motion.h4
					initial={{ opacity: isMobile ? 1 : 0.3 }}
					animate={{
						opacity: startTransition ? 1 : isMobile ? 1 : 0.3
					}}
					className={styles.text}
				>
					{title}
				</motion.h4>
			</div>
			{/* Border */}
			<div className={styles.wrapperLine}>
				<motion.hr
					className={styles.line}
					initial={{ opacity: 0.3 }}
					animate={{
						opacity: startTransition ? 1 : 0.3,
						// backgroundColor: startTransition
						// 	? '#000'
						// 	: '#000',
						background: startTransition ? '' : '#000'
					}}
					style={
						{
							// opacity: firstTextOpacity
							// // backgroundColor: firstRowBackground,
							// background: firstBackground
						}
					}
				></motion.hr>
			</div>
			{/* Svg */}
			{isMobile ? (
				<motion.div className={styles.svg} initial={{ opacity: 1 }}>
					{children}
				</motion.div>
			) : (
				<motion.div
					className={styles.svg}
					initial={{ opacity: 0.3 }}
					animate={{ opacity: startTransition ? 1 : 0.3 }}
				>
					{children}
				</motion.div>
			)}
		</div>
	);
};

export default Section;
