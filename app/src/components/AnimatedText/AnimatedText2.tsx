'use client';
import React, { useEffect, useRef } from 'react';

import { motion, useAnimation, useInView, Variant } from 'framer-motion';

import styles from './AnimatedText.module.scss';

type AnimatedTextProps = {
	text: string | string[];
	el?: keyof JSX.IntrinsicElements;
	className?: string;
	once?: boolean;
	animation?: {
		hidden: Variant;
		visible: Variant;
	};
	repeatDelay?: number;
	delayChildren?: number;
};

const defaultAnimations = {
	hidden: {
		opacity: 0,
		y: 20
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.1
		}
	}
};

function AnimatedText({
	text,
	el: Wrapper = 'p',
	className,
	once = true,
	animation = defaultAnimations,
	repeatDelay,
	delayChildren = 0
}: AnimatedTextProps) {
	const controls = useAnimation();
	const textArray = Array.isArray(text) ? text : [text];
	const ref = useRef(null);
	const isInView = useInView(ref, { amount: 0.3 });

	useEffect(() => {
		let timeout: NodeJS.Timeout;
		const show = () => {
			controls.start('visible');
		};
		if (isInView) {
			show();
		} else {
			controls.start('hidden');
		}
		return () => clearTimeout(timeout);
	}, [isInView, controls, repeatDelay]);

	return (
		<Wrapper className={className} style={{ overflow: 'hidden' }}>
			<span className={styles.firstSpan}>{text}</span>
			<motion.span
				ref={ref}
				aria-hidden
				initial="hidden"
				animate={controls}
				variants={{
					visible: {
						transition: {
							staggerChildren: 0.055,
							delayChildren
						}
					},
					hidden: {}
				}}
				// transition={{ staggerChildren: 0.05 }}
			>
				<motion.h2
					ref={ref}
					className={styles.text}
					// initial={{ y: 80 }}
					// animate={{ y: 0 }}
					// variants={animation}
					transition={{
						duration: 1,
						type: 'spring'
					}}
					variants={{
						visible: {
							y: 0
						},
						hidden: { y: 150 }
					}}
				>
					{text}
				</motion.h2>
			</motion.span>
		</Wrapper>
	);
}

export default AnimatedText;
