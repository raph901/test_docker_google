import React, { useRef, useEffect, useState } from 'react';
import FirstPatient from '../FirstPatient/FirstPatient';
import SecondPatient from '../SecondPatient/SecondPatient';
import ThirdPatient from '../ThirdPatient/ThirdPatient';
import styles from './WhatWeDoResponsive.module.scss';
import { motion } from 'framer-motion';

function WhatWeDoResponsive() {
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
			setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
		}
	}, []);

	const svgComponents = [
		<FirstPatient key={"FirstPatient-1"} />,
		<SecondPatient key={"FirstPatient-2"} />,
		<ThirdPatient key={"FirstPatient-3"} />
	];

	return (
		<div className={styles.allCardContainer}>
			<motion.div ref={carousel} className={styles.carousel}>
				<motion.div
					drag="x"
					dragConstraints={{ right: 0, left: -width }}
					className={styles.innerCarousel}
				>
					{svgComponents.map((svgComponent, index) => (
						<motion.div
							className={styles.itemContainer}
							key={index}
							variants={animationVariant}
							initial="initial"
							whileInView="animate"
							custom={index}
						>
							{svgComponent}
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</div>
	);
}

export default WhatWeDoResponsive;
