'use client';

import React, { useRef, useEffect, useState } from 'react';
import styles from './OurScientificLeaders.module.scss';
import { motion } from 'framer-motion';
import { images } from '@/styles/images/caroussel/images';
import Image from 'next/image';
import GetScientifics from '@/services/scientifics/GetScientifics';
import TitleSection from '../TitleSection/TitleSection';
function OurScientificLeaders() {
	const [width, setWidth] = useState(0);
	const carousel = useRef(null);
	const animationVariant = {
		initial: {
			opacity: 0,
			y: 100
		},
		animate: (index: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.05 * index
			}
		})
	};
	useEffect(() => {
		if(carousel.current) {
			// @ts-ignore
			setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
		}
	});

	const scientifics = GetScientifics();

	return (
		<section className={styles.ourScientificLeaders}>
			<div className={styles.container}>
				<div className={styles.titleContainer}>
					<TitleSection label="OUR SCIENTIFIC LEADERS" />
					<div className={styles.subtitleContainer}>
						<h2 className={styles.subtitle}>
							Our Clinical Steering Committee
							<br />
							<span>includes world-renowned oncologists.</span>
						</h2>
					</div>
				</div>
				<div className={styles.carouselContainer}>
					<motion.div ref={carousel} className={styles.carousel}>
						<motion.div
							drag="x"
							dragConstraints={{ right: 0, left: -width }}
							className={styles.innerCarousel}
						>
							{scientifics.map((image, index) => {
								return (
									<motion.div
										className={styles.itemContainer}
										key={index}
										variants={animationVariant}
										initial="initial"
										whileInView="animate"
										custom={index}
									>
										<div className={styles.imgPeople}>
											<img
												src={image.profilUrl}
												alt={image.alt}
											/>
										</div>
										<div>
											<div className={styles.textCarousel}>
												<p className={styles.perso}>
													{' '}
													{image.name} {image.lastName},{' '}
													{image.role}{' '}
												</p>
												<p className={styles.titletest}>
													{image.title}
												</p>
												<p className={styles.search}>
													{image.description}
												</p>
											</div>
										</div>


										<div className={styles.institut}>
											<img src={image.img1} alt="" />
											<img src={image.img2} alt="" />
										</div>
									</motion.div>
								);
							})}
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

export default OurScientificLeaders;
