'use client';

import styles from '@/components/OurCommunity/OurCommunity.module.scss';
import TitleSection from '@/components/TitleSection/TitleSection';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

export default function OurCommunity() {
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
		offset: ['start end', 'end start']
	});
	const firstYImage: any = useTransform(
		scrollYProgress,
		[0, 1],
		['0%', '-180%']
	);
	const secondYImage: any = useTransform(
		scrollYProgress,
		[0, 1],
		['100%', '-380%']
	);
	const thirdYImage: any = useTransform(
		scrollYProgress,
		[0, 1],
		['100%', '-280%']
	);
	return (
		<div className={styles.container} ref={targetRef}>
			<div className={styles.firstContainer}>
				<div className={styles.textContainer}>
					<div>
						<TitleSection label="OUR NETWORK" />
						<p>
							We have identified patients in more than 50
							countries reflecting human diversity and fostering
							collaboration will outstanding researchers and
							clinicians all around the world.
						</p>
						 <div className={styles.communityImg}>
			
						</div> 
					</div>
				</div>
				<div className={styles.containerImages}>
					<motion.div
						className={styles.containerImgWoman}
						style={{
							y: isMobile ? '0%' : firstYImage
							// transition: '0.5s'
						}}
					>
						<div className={styles.bottomContainerImages}>
							<motion.div
								className={styles.containerImgHand}
								style={{
									y: isMobile ? 0 : secondYImage
									// transition: '0.5s'
								}}
							>
								<Image
									src="/images/ourCommunity/about-us-picture-3.png"
									alt="post-it"
									className={styles.img}
									width={0}
									height={0}
								/>
							</motion.div>
							<motion.div
								className={styles.containerImgRadiography}
								style={{
									y: isMobile ? 0 : thirdYImage
									// transition: '0.5s'
								}}
							>
								<Image
									src="/images/ourCommunity/about-us-picture-4.png"
									alt="woman"
									className={styles.img}
									width={0}
									height={0}
								/>
							</motion.div>
						</div>
						<Image
							src="/images/ourCommunity/about-us-picture-5.png"
							alt="woman"
							className={styles.img}
							width={0}
							height={0}
						/>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
