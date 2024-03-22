import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './SecondPatient.module.scss';

function SecondPatient() {
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
	const [isHoveredFirstImg, setHoveredFirstImg] = useState(false);

	const ShapeContainer = {
		hidden: {},
		show: {
			transition: {
				staggerChildren: 0.015,
				staggerDirection: 1
			}
		}
	};
	const [isHoveredSecondImg, setHoveredSecondImg] = useState(false);

	const LungesShapeContainer = {
		hidden: {},
		show: {
			transition: {
				staggerChildren: 0.005,
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
			onMouseEnter={() => setHoveredSecondImg(true)}
			onMouseLeave={() => setHoveredSecondImg(false)}
			variants={LungesShapeContainer}
			initial={isMobile ? 'show' : 'hidden'}
			whileHover="show"
			animate="hidden"
		>
			<motion.div
				className={styles.descriptionContainer}
				initial={false}
				animate={{
					opacity: isMobile ? 1 : isHoveredSecondImg ? 1 : 0.2
				}}
			>
				<Image
					src="/images/whatWeDo/poumonPicto.svg"
					alt="poumon-picto"
					width={52}
					height={50}
				/>
				<div className={styles.descriptionTextContainer}>
					<h4 className={styles.firstParagraph}>ES-SCLC</h4>
					<h4 className={styles.secondParagraph}>
						Lung Cancer
						<br />
						Extensive stage
					</h4>
				</div>
			</motion.div>
			<motion.div
				className={styles.secondImageContainer}
				initial={false}
				animate={
					isMobile
						? { filter: ' blur(0px)' }
						: {
								filter: isHoveredSecondImg
									? 'blur(0)'
									: 'blur(5px)'
						  }
				}
			>
				{/* <div className={styles.leftTraits} /> */}

				<div className={styles.imageAndCalque}>
					<motion.div
						className={styles.secondImageCalqueTop}
						style={{ backdropFilter: 'blur(5px)' }}
						animate={{
							backdropFilter: isMobile
								? ' blur(0px)'
								: 'blur(5px)'
						}}
					/>
					<motion.div
						className={styles.secondImageCalqueMiddle}
						initial={false}
						// animate={{
						// 	backdropFilter: isMobile
						// 		? ' blur(0px)'
						// 		: 'blur(5px)'
						// }}
					/>
					<motion.div
						className={styles.secondImageCalqueBot}
						style={{ backdropFilter: 'blur(5px)' }}
						animate={{
							backdropFilter: isMobile
								? ' blur(0px)'
								: 'blur(5px)'
						}}
					/>
					<div className={styles.secondImageTarget}>
						{isMobile ? (
							<Image
								src="/images/whatWeDo/Shape_Lungs.svg"
								alt="Shape_Lungs"
								width={143}
								height={143}
							/>
						) : (
							<svg
								width="143"
								height="143"
								viewBox="0 0 143 143"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M35.3438 3.89063V0H37.2891V3.89063L41.1797 3.89063V5.83594L37.2891 5.83594V9.72656H35.3438V5.83594L31.4531 5.83594V3.89062L35.3438 3.89063Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M51.0703 3.89063V0H53.0156V3.89063L56.9062 3.89063V5.83594L53.0156 5.83594V9.72656H51.0703V5.83594L47.1797 5.83594V3.89062L51.0703 3.89063Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M19.6172 18.6172V14.7266H21.5625V18.6172L25.4531 18.6172V20.5625L21.5625 20.5625V24.4531H19.6172V20.5625L15.7266 20.5625V18.6172L19.6172 18.6172Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M35.3438 18.6172V14.7266H37.2891V18.6172L41.1797 18.6172V20.5625L37.2891 20.5625V24.4531H35.3438V20.5625L31.4531 20.5625V18.6172L35.3438 18.6172Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M51.0703 18.6172V14.7266H53.0156V18.6172L56.9062 18.6172V20.5625L53.0156 20.5625V24.4531H51.0703V20.5625L47.1797 20.5625V18.6172L51.0703 18.6172Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M3.89062 33.3438V29.4531H5.83594V33.3438L9.72656 33.3438V35.2891L5.83594 35.2891V39.1797H3.89062V35.2891L0 35.2891V33.3438L3.89062 33.3438Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M19.6172 33.3438V29.4531H21.5625V33.3438L25.4531 33.3438V35.2891L21.5625 35.2891V39.1797H19.6172V35.2891L15.7266 35.2891V33.3438L19.6172 33.3438Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M35.3438 33.3438V29.4531H37.2891V33.3438L41.1797 33.3438V35.2891L37.2891 35.2891V39.1797H35.3438V35.2891L31.4531 35.2891V33.3438L35.3438 33.3438Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M51.0703 33.3438V29.4531H53.0156V33.3438L56.9062 33.3438V35.2891L53.0156 35.2891V39.1797H51.0703V35.2891L47.1797 35.2891V33.3438L51.0703 33.3438Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M3.89062 48.0703V44.1797H5.83594V48.0703L9.72656 48.0703V50.0156L5.83594 50.0156V53.9062H3.89062V50.0156L0 50.0156V48.0703L3.89062 48.0703Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M19.6172 48.0703V44.1797H21.5625V48.0703L25.4531 48.0703V50.0156L21.5625 50.0156V53.9062H19.6172V50.0156L15.7266 50.0156V48.0703L19.6172 48.0703Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M35.3438 48.0703V44.1797H37.2891V48.0703L41.1797 48.0703V50.0156L37.2891 50.0156V53.9062H35.3438V50.0156L31.4531 50.0156V48.0703L35.3438 48.0703Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M51.0703 48.0703V44.1797H53.0156V48.0703L56.9062 48.0703V50.0156L53.0156 50.0156V53.9062H51.0703V50.0156L47.1797 50.0156V48.0703L51.0703 48.0703Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M3.89062 62.7969V58.9062H5.83594V62.7969L9.72656 62.7969V64.7422L5.83594 64.7422V68.6328H3.89062V64.7422L0 64.7422V62.7969L3.89062 62.7969Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M19.6172 62.7969V58.9062H21.5625V62.7969L25.4531 62.7969V64.7422L21.5625 64.7422V68.6328H19.6172V64.7422L15.7266 64.7422V62.7969L19.6172 62.7969Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M35.3438 62.7969V58.9062H37.2891V62.7969L41.1797 62.7969V64.7422L37.2891 64.7422V68.6328H35.3438V64.7422L31.4531 64.7422V62.7969L35.3438 62.7969Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M51.0703 62.7969V58.9062H53.0156V62.7969L56.9062 62.7969V64.7422L53.0156 64.7422V68.6328H51.0703V64.7422L47.1797 64.7422V62.7969L51.0703 62.7969Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M3.89062 77.5234V73.6328H5.83594V77.5234L9.72656 77.5234V79.4688L5.83594 79.4688V83.3594H3.89062V79.4688L0 79.4688V77.5234L3.89062 77.5234Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M19.6172 77.5234V73.6328H21.5625V77.5234L25.4531 77.5234V79.4688L21.5625 79.4688V83.3594H19.6172V79.4688L15.7266 79.4688V77.5234L19.6172 77.5234Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M35.3438 77.5234V73.6328H37.2891V77.5234L41.1797 77.5234V79.4688L37.2891 79.4688V83.3594H35.3438V79.4688L31.4531 79.4688V77.5234L35.3438 77.5234Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M51.0703 77.5234V73.6328H53.0156V77.5234L56.9062 77.5234V79.4688L53.0156 79.4688V83.3594H51.0703V79.4688L47.1797 79.4688V77.5234L51.0703 77.5234Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M3.89062 92.25V88.3594H5.83594V92.25L9.72656 92.25V94.1953L5.83594 94.1953V98.0859H3.89062V94.1953L0 94.1953V92.25L3.89062 92.25Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M19.6172 92.25V88.3594H21.5625V92.25L25.4531 92.25V94.1953L21.5625 94.1953V98.0859H19.6172V94.1953L15.7266 94.1953V92.25L19.6172 92.25Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M35.3438 92.25V88.3594H37.2891V92.25L41.1797 92.25V94.1953L37.2891 94.1953V98.0859H35.3438V94.1953L31.4531 94.1953V92.25L35.3438 92.25Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M51.0703 92.25V88.3594H53.0156V92.25L56.9062 92.25V94.1953L53.0156 94.1953V98.0859H51.0703V94.1953L47.1797 94.1953V92.25L51.0703 92.25Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M3.89062 106.977V103.086H5.83594V106.977L9.72656 106.977V108.922L5.83594 108.922V112.812H3.89062V108.922L0 108.922V106.977L3.89062 106.977Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M19.6172 106.977V103.086H21.5625V106.977L25.4531 106.977V108.922L21.5625 108.922V112.812H19.6172V108.922L15.7266 108.922V106.977L19.6172 106.977Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M35.3438 106.977V103.086H37.2891V106.977L41.1797 106.977V108.922L37.2891 108.922V112.812H35.3438V108.922L31.4531 108.922V106.977L35.3438 106.977Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M51.0703 106.977V103.086H53.0156V106.977L56.9062 106.977V108.922L53.0156 108.922V112.812H51.0703V108.922L47.1797 108.922V106.977L51.0703 106.977Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M3.89062 121.703V117.812H5.83594V121.703L9.72656 121.703V123.648L5.83594 123.648V127.539H3.89062V123.648L0 123.648V121.703L3.89062 121.703Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M19.6172 121.703V117.812H21.5625V121.703L25.4531 121.703V123.648L21.5625 123.648V127.539H19.6172V123.648L15.7266 123.648V121.703L19.6172 121.703Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M35.3438 121.703V117.812H37.2891V121.703L41.1797 121.703V123.648L37.2891 123.648V127.539H35.3438V123.648L31.4531 123.648V121.703L35.3438 121.703Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M51.0703 121.703V117.812H53.0156V121.703L56.9062 121.703V123.648L53.0156 123.648V127.539H51.0703V123.648L47.1797 123.648V121.703L51.0703 121.703Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M3.89062 136.43V132.539H5.83594V136.43L9.72656 136.43V138.375L5.83594 138.375V142.266H3.89062V138.375L0 138.375V136.43L3.89062 136.43Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M19.6172 136.43V132.539H21.5625V136.43L25.4531 136.43V138.375L21.5625 138.375V142.266H19.6172V138.375L15.7266 138.375V136.43L19.6172 136.43Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M35.3438 136.43V132.539H37.2891V136.43L41.1797 136.43V138.375L37.2891 138.375V142.266H35.3438V138.375L31.4531 138.375V136.43L35.3438 136.43Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M51.0703 136.43V132.539H53.0156V136.43L56.9062 136.43V138.375L53.0156 138.375V142.266H51.0703V138.375L47.1797 138.375V136.43L51.0703 136.43Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M91.5625 3.89063V0H89.6172V3.89063L85.7266 3.89063V5.83594L89.6172 5.83594V9.72656H91.5625V5.83594L95.4531 5.83594V3.89062L91.5625 3.89063Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M75.8359 3.89063V0H73.8906V3.89063L70 3.89063V5.83594L73.8906 5.83594V9.72656H75.8359V5.83594L79.7266 5.83594V3.89062L75.8359 3.89063Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M107.289 18.6172V14.7266H105.344V18.6172L101.453 18.6172V20.5625L105.344 20.5625V24.4531H107.289V20.5625L111.18 20.5625V18.6172L107.289 18.6172Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M91.5625 18.6172V14.7266H89.6172V18.6172L85.7266 18.6172V20.5625L89.6172 20.5625V24.4531H91.5625V20.5625L95.4531 20.5625V18.6172L91.5625 18.6172Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M75.8359 18.6172V14.7266H73.8906V18.6172L70 18.6172V20.5625L73.8906 20.5625V24.4531H75.8359V20.5625L79.7266 20.5625V18.6172L75.8359 18.6172Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M123.016 33.3438V29.4531H121.07V33.3438L117.18 33.3438V35.2891L121.07 35.2891V39.1797H123.016V35.2891L126.906 35.2891V33.3438L123.016 33.3438Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M107.289 33.3438V29.4531H105.344V33.3438L101.453 33.3438V35.2891L105.344 35.2891V39.1797H107.289V35.2891L111.18 35.2891V33.3438L107.289 33.3438Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M91.5625 33.3438V29.4531H89.6172V33.3438L85.7266 33.3438V35.2891L89.6172 35.2891V39.1797H91.5625V35.2891L95.4531 35.2891V33.3438L91.5625 33.3438Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M75.8359 33.3438V29.4531H73.8906V33.3438L70 33.3438V35.2891L73.8906 35.2891V39.1797H75.8359V35.2891L79.7266 35.2891V33.3438L75.8359 33.3438Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M138.742 48.0703V44.1797H136.797V48.0703L132.906 48.0703V50.0156L136.797 50.0156V53.9062H138.742V50.0156L142.633 50.0156V48.0703L138.742 48.0703Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M123.016 48.0703V44.1797H121.07V48.0703L117.18 48.0703V50.0156L121.07 50.0156V53.9062H123.016V50.0156L126.906 50.0156V48.0703L123.016 48.0703Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M107.289 48.0703V44.1797H105.344V48.0703L101.453 48.0703V50.0156L105.344 50.0156V53.9062H107.289V50.0156L111.18 50.0156V48.0703L107.289 48.0703Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M91.5625 48.0703V44.1797H89.6172V48.0703L85.7266 48.0703V50.0156L89.6172 50.0156V53.9062H91.5625V50.0156L95.4531 50.0156V48.0703L91.5625 48.0703Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M75.8359 48.0703V44.1797H73.8906V48.0703L70 48.0703V50.0156L73.8906 50.0156V53.9062H75.8359V50.0156L79.7266 50.0156V48.0703L75.8359 48.0703Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M138.742 62.7969V58.9062H136.797V62.7969L132.906 62.7969V64.7422L136.797 64.7422V68.6328H138.742V64.7422L142.633 64.7422V62.7969L138.742 62.7969Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M123.016 62.7969V58.9062H121.07V62.7969L117.18 62.7969V64.7422L121.07 64.7422V68.6328H123.016V64.7422L126.906 64.7422V62.7969L123.016 62.7969Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M107.289 62.7969V58.9062H105.344V62.7969L101.453 62.7969V64.7422L105.344 64.7422V68.6328H107.289V64.7422L111.18 64.7422V62.7969L107.289 62.7969Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M91.5625 62.7969V58.9062H89.6172V62.7969L85.7266 62.7969V64.7422L89.6172 64.7422V68.6328H91.5625V64.7422L95.4531 64.7422V62.7969L91.5625 62.7969Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M75.8359 62.7969V58.9062H73.8906V62.7969L70 62.7969V64.7422L73.8906 64.7422V68.6328H75.8359V64.7422L79.7266 64.7422V62.7969L75.8359 62.7969Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M138.742 77.5234V73.6328H136.797V77.5234L132.906 77.5234V79.4688L136.797 79.4688V83.3594H138.742V79.4688L142.633 79.4688V77.5234L138.742 77.5234Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M123.016 77.5234V73.6328H121.07V77.5234L117.18 77.5234V79.4688L121.07 79.4688V83.3594H123.016V79.4688L126.906 79.4688V77.5234L123.016 77.5234Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M107.289 77.5234V73.6328H105.344V77.5234L101.453 77.5234V79.4688L105.344 79.4688V83.3594H107.289V79.4688L111.18 79.4688V77.5234L107.289 77.5234Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M91.5625 77.5234V73.6328H89.6172V77.5234L85.7266 77.5234V79.4688L89.6172 79.4688V83.3594H91.5625V79.4688L95.4531 79.4688V77.5234L91.5625 77.5234Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M75.8359 77.5234V73.6328H73.8906V77.5234L70 77.5234V79.4688L73.8906 79.4688V83.3594H75.8359V79.4688L79.7266 79.4688V77.5234L75.8359 77.5234Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M138.742 92.25V88.3594H136.797V92.25L132.906 92.25V94.1953L136.797 94.1953V98.0859H138.742V94.1953L142.633 94.1953V92.25L138.742 92.25Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M123.016 92.25V88.3594H121.07V92.25L117.18 92.25V94.1953L121.07 94.1953V98.0859H123.016V94.1953L126.906 94.1953V92.25L123.016 92.25Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M107.289 92.25V88.3594H105.344V92.25L101.453 92.25V94.1953L105.344 94.1953V98.0859H107.289V94.1953L111.18 94.1953V92.25L107.289 92.25Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M91.5625 92.25V88.3594H89.6172V92.25L85.7266 92.25V94.1953L89.6172 94.1953V98.0859H91.5625V94.1953L95.4531 94.1953V92.25L91.5625 92.25Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M75.8359 92.25V88.3594H73.8906V92.25L70 92.25V94.1953L73.8906 94.1953V98.0859H75.8359V94.1953L79.7266 94.1953V92.25L75.8359 92.25Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M138.742 106.977V103.086H136.797V106.977L132.906 106.977V108.922L136.797 108.922V112.812H138.742V108.922L142.633 108.922V106.977L138.742 106.977Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M123.016 106.977V103.086H121.07V106.977L117.18 106.977V108.922L121.07 108.922V112.812H123.016V108.922L126.906 108.922V106.977L123.016 106.977Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M107.289 106.977V103.086H105.344V106.977L101.453 106.977V108.922L105.344 108.922V112.812H107.289V108.922L111.18 108.922V106.977L107.289 106.977Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M91.5625 106.977V103.086H89.6172V106.977L85.7266 106.977V108.922L89.6172 108.922V112.812H91.5625V108.922L95.4531 108.922V106.977L91.5625 106.977Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M75.8359 106.977V103.086H73.8906V106.977L70 106.977V108.922L73.8906 108.922V112.812H75.8359V108.922L79.7266 108.922V106.977L75.8359 106.977Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M138.742 121.703V117.812H136.797V121.703L132.906 121.703V123.648L136.797 123.648V127.539H138.742V123.648L142.633 123.648V121.703L138.742 121.703Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M123.016 121.703V117.812H121.07V121.703L117.18 121.703V123.648L121.07 123.648V127.539H123.016V123.648L126.906 123.648V121.703L123.016 121.703Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M107.289 121.703V117.812H105.344V121.703L101.453 121.703V123.648L105.344 123.648V127.539H107.289V123.648L111.18 123.648V121.703L107.289 121.703Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M91.5625 121.703V117.812H89.6172V121.703L85.7266 121.703V123.648L89.6172 123.648V127.539H91.5625V123.648L95.4531 123.648V121.703L91.5625 121.703Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M75.8359 121.703V117.812H73.8906V121.703L70 121.703V123.648L73.8906 123.648V127.539H75.8359V123.648L79.7266 123.648V121.703L75.8359 121.703Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M138.742 136.43V132.539H136.797V136.43L132.906 136.43V138.375L136.797 138.375V142.266H138.742V138.375L142.633 138.375V136.43L138.742 136.43Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M123.016 136.43V132.539H121.07V136.43L117.18 136.43V138.375L121.07 138.375V142.266H123.016V138.375L126.906 138.375V136.43L123.016 136.43Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M107.289 136.43V132.539H105.344V136.43L101.453 136.43V138.375L105.344 138.375V142.266H107.289V138.375L111.18 138.375V136.43L107.289 136.43Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M91.5625 136.43V132.539H89.6172V136.43L85.7266 136.43V138.375L89.6172 138.375V142.266H91.5625V138.375L95.4531 138.375V136.43L91.5625 136.43Z"
									fill="#F05801"
								/>
								<motion.path
									variants={itemsShape}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M75.8359 136.43V132.539H73.8906V136.43L70 136.43V138.375L73.8906 138.375V142.266H75.8359V138.375L79.7266 138.375V136.43L75.8359 136.43Z"
									fill="#F05801"
								/>
							</svg>
						)}
					</div>

					<div
						style={{
							overflow: 'hidden',
							borderRadius: '0px 60px 0px 60px'
						}}
					>
						<motion.img
							src="/images/whatWeDo/What_we_do_Cancer_profile_2.png"
							alt="WWD_patient1"
							className={styles.img}
							animate={{
								scale: isMobile
									? 1
									: isHoveredSecondImg
									? 1
									: 1.2
							}}
						/>
					</div>
				</div>
				{/* <div className={styles.leftTraits} /> */}
			</motion.div>
		</motion.div>
	);
}

export default SecondPatient;
