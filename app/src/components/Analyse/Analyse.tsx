'use client';

import React, { useRef } from 'react';
import styles from './Analyse.module.scss';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
function Analyse() {
	const targetRef = useRef<HTMLElement>(null);

	const { scrollYProgress }: any = useScroll({
		target: targetRef,
		offset: ['start end', 'end center']
	});
	const firstTextOpacity: any = useTransform(
		scrollYProgress,
		(pos: number) => {
			return pos < 0.5 ? 1 : 0.3;
		}
	);
	const secondTextOpacity: any = useTransform(
		scrollYProgress,
		(pos: number) => {
			return pos > 0.5 ? 1 : 0.3;
		}
	);
	const firstImageOpacity: any = useTransform(
		scrollYProgress,
		[0, 0.5, 1],
		[0, 1, 1]
	);
	const firstYImage: any = useTransform(
		scrollYProgress,
		[0, 1],
		['-10', '-130%']
	);
	const secondImageOpacity: any = useTransform(
		scrollYProgress,
		[0, 0.5, 1],
		[0, 1, 0]
	);
	const secondYImage: any = useTransform(
		scrollYProgress,
		[0, 1],
		['100', '-170%']
	);
	const firstTextBackground: any = useTransform(
		scrollYProgress,
		(pos: number) => {
			return pos < 0.5 ? '#FEFAF6' : '#ffffff';
		}
	);
	const secondTextBackground: any = useTransform(
		scrollYProgress,
		(pos: number) => {
			return pos > 0.5 ? '#FEFAF6' : '#ffffff';
		}
	);
	return (
		<motion.section className={styles.analyse} ref={targetRef}>
			<div className={styles.scrollContainer}>
				<div className={styles.container}>
					<div className={styles.left}>
						<div className={styles.textContainer}>
							<motion.h3
								className={styles.text}
								style={{
									opacity: firstTextOpacity,
									backgroundColor: firstTextBackground,
									transition: '0.5s'
								}}
							>
								Patients with Cancer who respond exceptionally
								well to therapy may have molecular changes in
								their tumors that explain their response.{' '}
							</motion.h3>
							<motion.h3
								className={styles.text}
								style={{
									opacity: secondTextOpacity,
									backgroundColor: secondTextBackground,
									transition: '0.5s'
								}}
							>
								A comprehensive analysis of these Outliers may help to contribute to the development of potential new treatments.
							</motion.h3>
						</div>
					</div>
					<div className={styles.right}>
						<div className={styles.allImagesContainer}>
							<motion.div
								className={styles.imageContainer}
								style={{
									opacity: firstImageOpacity,
									y: firstYImage,
									transition: '0.5s'
								}}
							>
								<Image
									src="/images/analyse/analyse1.png"
									alt="analyse-1"
									fill
								/>
							</motion.div>
							<motion.div
								className={styles.imageContainer}
								style={{
									y: secondYImage,
									opacity: secondImageOpacity,
									transition: '0.5s'
								}}
							>
								<Image
									src="/images/analyse/analyse2.png"
									alt="analyse-2"
									fill
								/>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</motion.section>
	);
}

export default Analyse;
