'use client';

import styles from '@/components/OurExpertises/OurExpertises.module.scss';
import TitleSection from '@/components/TitleSection/TitleSection';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
export default function OurExpertises() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		window.addEventListener('resize', handleResize);
		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);
	const targetRef = useRef<HTMLDivElement>(null);

	const { scrollYProgress }: any = useScroll({
		target: targetRef,
		offset: ['start center', 'end center']
	});
	const firstYImage: any = useTransform(
		scrollYProgress,
		[0, 1],
		['40', '-180%']
	);
	const secondYImage: any = useTransform(
		scrollYProgress,
		[0, 1],
		['100', '-180%']
	);
	const thirdYImage: any = useTransform(
		scrollYProgress,
		[0, 1],
		['120', '-150%']
	);
	return (
		<div className={styles.container} ref={targetRef}>
			<div className={styles.firstContainer}>
				<div className={styles.textContainer}>
					<div>
						<TitleSection label="OUR EXPERTISES" />
						<p>
							Cure51 gathers talents coming from various areas of
							expertise – from biocomputation, to data
							engineering, biological samples analysis or Tech
							infrastructure – all driven by the same passion :
							cure cancer.
						</p>
					</div>
				</div>
				<div className={styles.containerImages}>
					<div className={styles.subContainerImages}>
						<motion.div
							className={styles.containerImgMem}
							style={{
								y: isMobile ? '0%' : firstYImage
							}}
						>
							<Image
								src="/images/ourExpertises/about-us-team.png"
								alt="mem"
								className={styles.img}
								width={0}
								height={0}
							/>
							<div className={styles.bottomContainerImages}>
								<motion.div
									className={styles.containerImgPostIt}
									style={{
										y: isMobile ? 0 : secondYImage
									}}
								>
									<Image
										src="/images/ourExpertises/about-us-picture-1.png"
										alt="post-it"
										className={styles.img}
										width={0}
										height={0}
									/>
								</motion.div>
								<motion.div
									className={styles.containerImgWoman}
									style={{
										y: isMobile ? 0 : thirdYImage
									}}
								>
									<Image
										src="/images/ourExpertises/about-us-picture-2.png"
										alt="woman"
										className={styles.img}
										width={0}
										height={0}
									/>
								</motion.div>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
}
