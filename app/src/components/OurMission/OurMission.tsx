'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import styles from './OurMission.module.scss';

import {
	ourMissionImgSrcRow1,
	ourMissionImgSrcRow2,
	ourMissionImgSrcRow3,
	ourMissionImgSrcRow4,
	ourMissionImgSrcRow5,
	ourMissionImgSrcRow6,
	ourMissionImgSrcRow7
} from '@/styles/images/ourMission/right_section/rows';
import Row from './Row/Row';
import TitleSection from '../TitleSection/TitleSection';

function OurMission() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		window.addEventListener('resize', handleResize);
		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const targetRef = useRef<HTMLElement>(null);

	const { scrollYProgress }: any = useScroll({
		target: targetRef,
		offset: ['start end', 'end center']
	});

	const firstTextOpacity: any = useTransform(
		scrollYProgress,
		(pos: number) => {
			return pos < 0.6 ? 1 : 0.3;
		}
	);
	const secondTextOpacity: any = useTransform(
		scrollYProgress,
		(pos: number) => {
			return pos > 0.6 && pos < 0.8 ? 1 : 0.3;
		}
	);
	const thirdTextOpacity: any = useTransform(
		scrollYProgress,
		(pos: number) => {
			return pos > 0.8 ? 1 : 0.3;
		}
	);
	const firstTextBackground: any = useTransform(
		scrollYProgress,
		(pos: number) => {
			return pos < 0.6 ? '#ffffff' : '#FEFAF6';
		}
	);
	const secondTextBackground: any = useTransform(
		scrollYProgress,
		(pos: number) => {
			return pos > 0.6 && pos < 0.8 ? '#ffffff' : '#FEFAF6';
		}
	);
	const thirdTextBackground: any = useTransform(
		scrollYProgress,
		(pos: number) => {
			return pos > 0.8 ? '#ffffff' : '#FEFAF6';
		}
	);
	return (
		<motion.section className={styles.ourMission} ref={targetRef}>
			<div className={styles.scrollContainer}>
				<div className={styles.container}>
					<div className={styles.left}>
						<div className={styles.titleContainer}>
							<TitleSection label="OUR MISSION" />
						</div>
						<div className={styles.textContainer}>
							<motion.h4
								className={styles.text}
								style={{
									opacity: firstTextOpacity,
									backgroundColor: firstTextBackground
								}}
							>
								Oncology players usually look at the biology of the 97% of patients who die from the most lethal Cancers.
							</motion.h4>
							<motion.h4
								className={styles.text}
								style={{
									opacity: secondTextOpacity,
									backgroundColor: secondTextBackground
								}}
							>
								We focus on the miraculous 3% of patients
								who do survive.
							</motion.h4>
							<motion.h4
								className={styles.text}
								style={{
									opacity: thirdTextOpacity,
									backgroundColor: thirdTextBackground
								}}
							>
								They are the <p className={styles.outlier}>Outliers.</p>
							</motion.h4>
						</div>
					</div>
					<motion.div className={styles.right}>
						<Row
							scrollYProgress={scrollYProgress}
							rows={ourMissionImgSrcRow1}
						/>
						<Row
							scrollYProgress={scrollYProgress}
							rows={ourMissionImgSrcRow2}
						/>
						<Row
							scrollYProgress={scrollYProgress}
							rows={ourMissionImgSrcRow3}
						/>
						<Row
							scrollYProgress={scrollYProgress}
							rows={ourMissionImgSrcRow4}
						/>
						<Row
							scrollYProgress={scrollYProgress}
							rows={ourMissionImgSrcRow5}
						/>
						<Row
							scrollYProgress={scrollYProgress}
							rows={ourMissionImgSrcRow6}
						/>
						<Row
							scrollYProgress={scrollYProgress}
							rows={ourMissionImgSrcRow7}
						/>
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
}

export default OurMission;
