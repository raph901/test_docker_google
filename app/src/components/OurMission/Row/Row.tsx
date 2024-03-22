import React from 'react';
import styles from './Row.module.scss';
import { useTransform, motion } from 'framer-motion';
import Image from 'next/image';

interface RowProps {
	rows: Array<{ alt: string; src: string; isOutlier?: boolean }>;
	scrollYProgress: number;
}

interface RowImage {
	alt: string;
	src: string;
	isOutlier?: boolean;
}

interface RowImageCompProps {
	image: RowImage;
	scrollYProgress: any;
}

function Row({ rows, scrollYProgress }: RowProps) {
	return (
		<div className={styles.row}>
			{rows.map((image: RowImage) => (
				<RowImage
					key={image.alt}
					image={image}
					scrollYProgress={scrollYProgress}
				/>
			))}
		</div>
	);
}

export default Row;

function RowImage({ image, scrollYProgress }: RowImageCompProps) {
	function generateRandomNumber(min: number, max: number) {
		return Math.random() * (max - min) + min;
	}
	const randomNumber = generateRandomNumber(0.1, 0.3);
	const randomNumber1 = generateRandomNumber(0.3, 0.4);
	const randomNumber2 = generateRandomNumber(0.7, 1);

	const opacity = useTransform(
		scrollYProgress,
		[randomNumber, randomNumber1, 0.6, image.isOutlier ? 1 : 0.8],
		[0, 1, 1, image.isOutlier ? 1 : 0]
	);

	const scale = useTransform(
		scrollYProgress,
		[
			randomNumber,
			randomNumber1,
			0.4,
			image.isOutlier ? 0.7 : randomNumber2,
			image.isOutlier ? 1 : randomNumber2
		],
		[
			2,
			1,
			image.isOutlier ? 1 : 1,
			image.isOutlier ? 4 : 0.8,
			image.isOutlier ? 6 : 0
		]
	);

	return (
		<motion.div
			key={image.alt}
			style={{
				opacity: opacity,
				scale: scale,
				zIndex: image.isOutlier ? 1 : 0
			}}
		>
			{image.src ==
			'/images/ourMission/right_section/invisible_img.jpg' ? (
				<div className={styles.imgInvisible} />
			) : (
				<Image
					src={image.src}
					alt={image.alt}
					width={350}
					height={500}
					className={styles.imgPatient}
					style={{
						borderRadius: '5px',
						objectFit: 'cover'
					}}
					
				/>
			)}
		</motion.div>
	);
}
