'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import styles from './Hero.module.scss';
import AnimatedText from '../AnimatedText/AnimatedText';
import Image from 'next/image';
import Link from 'next/link';
import ArrowLink from '@/components/ArrowLink/ArrowLink';

function Hero() {
	useEffect(() => {
		const mapAnimation = {
			from: {
				WebkitMaskPosition: 'center center',
				maskPosition: 'center center',
				WebkitMaskSize: '0% 0%',
				maskSize: '0% 0%'
			},
			to: {
				WebkitMaskPosition: 'center center',
				maskPosition: 'center center',
				WebkitMaskSize: '200% 200%',
				maskSize: '200% 200%'
			}
		};

		const targetRef: any = document.querySelector(
			`.${styles.hero} .${styles.background}`
		);

		if (targetRef === null) {
			return;
		}

		targetRef.style.webkitMask = `
		linear-gradient(#000 0 0) no-repeat,
		radial-gradient(circle, transparent 50%, black 10%) var(--g) no-repeat,
		radial-gradient(circle, transparent 50%, black 10%) var(--g) no-repeat`;
		targetRef.style.webkitMaskComposite = 'xor, source-over';
		targetRef.style.maskComposite = 'exclude, add';
		targetRef.style.transition = '0.5s';
		targetRef.style.opacity = '0.2';
		targetRef.style.animation = 'mapAnimation 3s ease-in-out forwards';

		const keyframes = `@keyframes mapAnimation {
		from {
			-webkit-mask-position: ${mapAnimation.from.WebkitMaskPosition};
			mask-position: ${mapAnimation.from.maskPosition};
			-webkit-mask-size: ${mapAnimation.from.WebkitMaskSize};
			mask-size: ${mapAnimation.from.maskSize};
		}
		to {
			-webkit-mask-position: ${mapAnimation.to.WebkitMaskPosition};
			mask-position: ${mapAnimation.to.maskPosition};
			-webkit-mask-size: ${mapAnimation.to.WebkitMaskSize};
			mask-size: ${mapAnimation.to.maskSize};
		}
		}`;

		const styleSheet = document.styleSheets[0];
		styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
	}, []);

	const targetRef = useRef<HTMLElement>(null);

	const partnerContainer = {
		hidden: {},
		show: {
			transition: {
				delayChildren: 2.75,
				staggerChildren: 0.1
			}
		}
	};
	const itemsPartner = {
		hidden: { opacity: 0 },
		show: { opacity: 1 }
	};

	return (
		<motion.section ref={targetRef} className={styles.hero}>
			<div className={styles.background}></div>

			<div className={styles.container}>
				<div className={styles.subContainer} style={{ width: '100%' }}>
					<div className={styles.left}>
						<motion.div
							style={{}}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 2.25, duration: 0.7 }}
						>
							<p className={styles.uptitle}>
								Hope is for everyone.
							</p>
						</motion.div>
						<div className={styles.titleContainer}>
							<motion.div
								style={{
									display: 'inline-block',
									overflow: 'hidden'
								}}
							>
								<motion.h1
									className={styles.title}
									initial={{ y: 100, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{
										delay: 1.25,
										duration: 1,
										type: 'spring'
									}}
								>
									We want every patient
								</motion.h1>
							</motion.div>
							<div className={styles.outlierContainer}>
								<motion.div
									style={{
										display: 'inline-block',
										overflow: 'hidden'
									}}
								>
									<motion.h1
										className={styles.title}
										initial={{ y: 100, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										transition={{
											delay: 1.75,
											duration: 1,
											type: 'spring'
										}}
									>
										to become an
									</motion.h1>
								</motion.div>

								<motion.div
									style={{ display: 'inline-block' }}
									initial={{ opacity: 0 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 1, delay: 2 }}
								>
									<p className={styles.outlier}> Outlier.</p>
								</motion.div>
							</div>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 1, delay: 3 }}
								className={styles.contactUsLinkContainer}
							>
								<ArrowLink props={{title: "Contact Us", link: "/contact-us"}} />
							</motion.div>
						</div>
						<motion.div
							className={styles.partnerContainer}
							variants={partnerContainer}
							initial="hidden"
							animate="show"
						>
							<div className={styles.container}>
								<motion.h3
									className={styles.title}
									variants={itemsPartner}
								>
									Co-founded by
								</motion.h3>

								<div className={styles.partenaires}>
									<motion.div variants={itemsPartner}>
										<Image
											src="/images/hero/partenaires/Logo_Gustave_Roussy_Grey.svg"
											alt=""
											className={styles.logo_gustave}
											width={85}
											height={60}
										/>
									</motion.div>
									<motion.div variants={itemsPartner}>
										<Image
											src="/images/hero/partenaires/Logo_Leon_Berard_Grey.svg"
											alt=""
											className={styles.logo_leon}
											width={85}
											height={60}
										/>
									</motion.div>
									<motion.div variants={itemsPartner}>
										<Image
											src="/images/hero/partenaires/Logo_Charite_Grey.svg"
											alt=""
											className={styles.logo_charite}
											width={85}
											height={60}
										/>
									</motion.div>
									{<motion.div variants={itemsPartner}>
										<Image
											src="/images/hero/partenaires/logo-IEO-partners.png"
											alt=""
											className={styles.logo_IEO}
											width={143}
											height={60}
										/>
									</motion.div>}
									<motion.div variants={itemsPartner}>
										<Image
											src="/images/hero/partenaires/Logo_VHIO_Grey.svg"
											alt=""
											className={styles.logo_VHIO}
											width={405}
											height={433}
										/>
									</motion.div>
								</div>
							</div>
						</motion.div>
					</div>
					<div className={styles.right}>
						<div className={styles.container}>
							<div className={styles.imagesContainer}>
								<div className={styles.top}>
									<motion.div
										className={styles.firstPictureContainer}
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{
											duration: 1,
											delay: 2.75
										}}
									>
										<Image
											src="/images/hero/Header_picture_1.png"
											alt="Camille C."
											width={215}
											height={320}
											className={styles.firstPicture}
										/>
									</motion.div>
									<motion.div
										className={
											styles.secondPictureContainer
										}
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ duration: 1, delay: 2.8 }}
									>
										<Image
											src="/images/hero/Header_picture_2.png"
											alt="randomGuy1"
											width={131}
											height={183}
											className={styles.secondPicture}
										/>
									</motion.div>
								</div>
								<div className={styles.bottom}>
									<motion.div
										className={styles.thirdPictureContainer}
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{
											duration: 1,
											delay: 2.85
										}}
									>
										<Image
											src="/images/hero/Header_picture_3.png"
											alt="randomGuy2"
											width={138}
											height={179}
											className={styles.thirdPicture}
										/>
									</motion.div>
									<motion.div
										className={
											styles.fourthPictureContainer
										}
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ duration: 1, delay: 2.9 }}
									>
										<Image
											src="/images/hero/Header_picture_4.png"
											alt="Greg"
											width={230}
											height={305}
											className={styles.fourthPicture}
										/>
									</motion.div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</motion.section>
	);
}

export default Hero;
