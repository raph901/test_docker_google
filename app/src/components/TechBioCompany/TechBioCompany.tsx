'use client';
import React, { useState, useEffect, useRef } from 'react';
import BddSvg from './BddSvg/BddSvg';
import styles from './TechBioCompany.module.scss';
import Section from './Section/Section';
import Button from '../Button/Button';
import TitleSection from '../TitleSection/TitleSection';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import MoleculeSvg from './MoleculeSvg/MoleculeSvg';
import PillSvg from './PillSvg/PillSvg';
import CenterWrapper from '../CenterWrapper/CenterWrapper';

type Props = {};

const TechBioCompany = (props: Props) => {
	const carouselRef = useRef(null);
	const { scrollYProgress } = useScroll({ target: carouselRef });
	const [startFirstAnimation, setStartFirstAnimation] = useState(false);
	const [startSecondAnimation, setStartSecondAnimation] = useState(false);
	const [startThirdAnimation, setStartThirdAnimation] = useState(false);
	const title = [
		{
			title: 'Our proprietary Discovery Platform is a hub'
		},
		{
			title: 'to organize, analyze and discover novel therapeutic targets.'
		}
	];
	/* On récupere la valeur du scroll  */
	useMotionValueEvent(scrollYProgress, 'change', (latest) => {
		/* Management de la premiere section */
		if (latest > 0.3 && latest < 0.6) {
			setStartFirstAnimation(true);
		} else {
			setStartFirstAnimation(false);
		}
		/* Management de la seconde section */
		if (latest > 0.6 && latest < 0.8) {
			setStartSecondAnimation(true);
		} else {
			setStartSecondAnimation(false);
		}
		/* Management de la troiseime section */
		if (latest > 0.8 && latest < 1) {
			setStartThirdAnimation(true);
		} else {
			setStartThirdAnimation(false);
		}
	});

	const section = [
		{
			phrase: 'We are building a unique clinical and multi-omics database of Outliers across all continents.',
			transition: startFirstAnimation,
			svg: <BddSvg startTransition={startFirstAnimation} />
		},
		{
			phrase: 'Our computational biology team works with our scientific partners to discover multimodal signatures and create a library of robust targets contributing to the design of best-in-class drugs.',
			transition: startSecondAnimation,
			svg: <MoleculeSvg startTransition={startSecondAnimation} />
		},
		{
			phrase: 'We develop precision medicine tools in order to deliver actionable insights to discover novel therapeutics.',
			transition: startThirdAnimation,
			svg: <PillSvg startTransition={startThirdAnimation} />
		}
	];

	return (
		<section className={styles.section}>
			<CenterWrapper>
				<div ref={carouselRef} className={styles.mainWrapper}>
					<div className={styles.sticky}>
						{/* Title Section */}
						<TitleSection
							label="WE ARE A TECHBIO COMPANY"
							arrayOfSentence={title}
						/>
						{/* Dynamic section */}

						{section.map(({ phrase, transition, svg }, i) => (
							<Section
								key={i}
								title={phrase}
								startTransition={transition}
							>
								{svg}
							</Section>
						))}
					</div>
				</div>
			</CenterWrapper>
		</section>
	);
};

export default TechBioCompany;
