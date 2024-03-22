import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './ThirdPatient.module.scss';

function ThirdPatient() {
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		console.log('isMobile', isMobile);
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		window.addEventListener('resize', handleResize);
		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, [isMobile]);

	const [isHoveredThirdImg, setHoveredThirdImg] = useState(false);

	const ShapeContainer = {
		hidden: {},
		show: {
			transition: {
				staggerChildren: 0.015,
				staggerDirection: 1
			}
		}
	};

	const itemsShape = {
		hidden: { opacity: 0 },
		show: { opacity: 1 }
	};

	return (
		<motion.div
			className={styles.cardContainer}
			onMouseEnter={() => setHoveredThirdImg(true)}
			onMouseLeave={() => setHoveredThirdImg(false)}
			variants={ShapeContainer}
			initial={isMobile ? 'show' : 'hidden'}
			whileHover="show"
			animate="hidden"
		>
			<motion.div
				className={styles.descriptionContainer}
				initial={false}
				animate={{
					opacity: isMobile ? 1 : isHoveredThirdImg ? 1 : 0.2
				}}
			>
				<Image
					src="/images/whatWeDo/pancreasPicto.svg"
					alt="pancreas-picto"
					width={52}
					height={50}
				/>
				<div className={styles.descriptionTextContainer}>
					<h4 className={styles.firstParagraph}>PDAC</h4>
					<h4 className={styles.secondParagraph}>
						Metastatic pancreatic
						<br />
						Ductal adenocarcinoma
					</h4>
				</div>
			</motion.div>
			<motion.div
				className={styles.thirdImageContainer}
				initial={false}
				animate={
					isMobile
						? { filter: ' blur(0px)' }
						: {
								filter: isHoveredThirdImg
									? 'blur(0)'
									: 'blur(5px)'
						  }
				}
			>
				{/* <div className={styles.leftTraits} /> */}

				<div className={styles.imageAndCalque}>
					<motion.div
						className={styles.thirdImageCalqueTop}
						style={{ backdropFilter: 'blur(5px)' }}
						animate={{
							backdropFilter: isMobile
								? ' blur(0px)'
								: 'blur(5px)'
						}}
					/>
					<motion.div
						className={styles.thirdImageCalqueMiddle}
						initial={false}
						animate={{
							filter: isHoveredThirdImg ? 'blur(0)' : 'blur(5px)'
						}}
					/>
					<motion.div
						className={styles.thirdImageCalqueBot}
						style={{ backdropFilter: 'blur(5px)' }}
						animate={{
							backdropFilter: isMobile
								? ' blur(0px)'
								: 'blur(5px)'
						}}
					/>
					<div className={styles.thirdImageTarget}>
						{isMobile ? (
							<Image
								src="/images/whatWeDo/Shape_Pancreas.svg"
								alt="Shape_Lungs"
								width={89}
								height={40}
							/>
						) : (
							<svg
								width="89"
								height="40"
								viewBox="0 0 89 40"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<motion.path
									variants={itemsShape}
									d="M4.86328 0V9.72656M0 4.86328L9.72656 4.86329"
									stroke="#F05801"
									style={{ strokeWidth: 2 }}
								/>
								<motion.path
									variants={itemsShape}
									d="M20.5898 0V9.72656M15.7266 4.86328L25.4531 4.86329"
									stroke="#F05801"
									style={{ strokeWidth: 2 }}
								/>
								<motion.path
									variants={itemsShape}
									d="M36.3164 0V9.72656M31.4531 4.86328L41.1797 4.86329"
									stroke="#F05801"
									style={{ strokeWidth: 2 }}
								/>
								<motion.path
									variants={itemsShape}
									d="M52.043 0V9.72656M47.1797 4.86328L56.9062 4.86329"
									stroke="#F05801"
									style={{ strokeWidth: 2 }}
								/>
								<motion.path
									variants={itemsShape}
									d="M67.7695 0V9.72656M62.9062 4.86328L72.6328 4.86329"
									stroke="#F05801"
									style={{ strokeWidth: 2 }}
								/>
								<motion.path
									variants={itemsShape}
									d="M83.4961 0V9.72656M78.6328 4.86328L88.3594 4.86329"
									stroke="#F05801"
									style={{ strokeWidth: 2 }}
								/>
								<motion.path
									variants={itemsShape}
									d="M4.86328 14.7266V24.4531M0 19.5898L9.72656 19.5898"
									stroke="#F05801"
									style={{ strokeWidth: 2 }}
								/>
								<motion.path
									variants={itemsShape}
									d="M20.5898 14.7266V24.4531M15.7266 19.5898L25.4531 19.5898"
									stroke="#F05801"
									style={{ strokeWidth: 2 }}
								/>
								<motion.path
									variants={itemsShape}
									d="M36.3164 14.7266V24.4531M31.4531 19.5898L41.1797 19.5898"
									stroke="#F05801"
									style={{ strokeWidth: 2 }}
								/>
								<motion.path
									variants={itemsShape}
									d="M52.043 14.7266V24.4531M47.1797 19.5898L56.9062 19.5898"
									stroke="#F05801"
									style={{ strokeWidth: 2 }}
								/>
								<motion.path
									variants={itemsShape}
									d="M67.7695 14.7266V24.4531M62.9062 19.5898L72.6328 19.5898"
									stroke="#F05801"
									style={{ strokeWidth: 2 }}
								/>
								<motion.path
									variants={itemsShape}
									d="M83.4961 14.7266V24.4531M78.6328 19.5898L88.3594 19.5898"
									stroke="#F05801"
									style={{ strokeWidth: 2 }}
								/>
								<motion.path
									variants={itemsShape}
									d="M4.86328 29.4531V39.1797M0 34.3164L9.72656 34.3164"
									stroke="#F05801"
									style={{ strokeWidth: 2 }}
								/>
								<motion.path
									variants={itemsShape}
									d="M20.5898 29.4531V39.1797M15.7266 34.3164L25.4531 34.3164"
									stroke="#F05801"
									style={{ strokeWidth: 2 }}
								/>
								<motion.path
									variants={itemsShape}
									d="M36.3164 29.4531V39.1797M31.4531 34.3164L41.1797 34.3164"
									stroke="#F05801"
									style={{ strokeWidth: 2 }}
								/>
								<motion.path
									variants={itemsShape}
									d="M52.043 29.4531V39.1797M47.1797 34.3164L56.9062 34.3164"
									stroke="#F05801"
									style={{ strokeWidth: 2 }}
								/>
								<motion.path
									variants={itemsShape}
									d="M67.7695 29.4531V39.1797M62.9062 34.3164L72.6328 34.3164"
									stroke="#F05801"
									style={{ strokeWidth: 2 }}
								/>
							</svg>
						)}
					</div>
					<motion.div
						style={{
							overflow: 'hidden',
							borderRadius: '0px 60px 0px 60px'
						}}
					>
						<motion.img
							src="/images/whatWeDo/What_we_do_Cancer_profile_3.png"
							alt="WWD_patient1"
							className={styles.img}
							animate={{
								scale: isMobile
									? 1
									: isHoveredThirdImg
									? 1
									: 1.2
							}}
						/>
					</motion.div>
				</div>
				{/* <div className={styles.leftTraits} /> */}
			</motion.div>
		</motion.div>
	);
}

export default ThirdPatient;
