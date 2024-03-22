'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

interface TransitionSVGProps {
	background: string;
	heightSection?: number | string;
}

function TransitionSVG({
	background,
	heightSection = '60vh'
}: TransitionSVGProps) {
	const targetRef = useRef<HTMLElement>(null);

	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		window.addEventListener('resize', handleResize);
		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const { scrollYProgress }: any = useScroll({
		target: targetRef,
		offset: ['start center', 'end center']
	});
	const height = useTransform(scrollYProgress, [0, 1], ['100%', '70%']);
	return (
		<section
			style={{
				position: 'relative',
				height: !isMobile ? heightSection : "30vh",
				background,
				zIndex: -2
			}}
			ref={targetRef}
		>
			{!isMobile && (
				<motion.div style={{ height, position: 'relative' }}>
					<Image
						src="/images/Transition_VF_V3.png"
						alt="transition"
						// height={1080}
						// width={1920}
						fill
						style={{
							opacity: 0.3,
							mask: 'linear-gradient(transparent, white 50%, transparent)'
						}}
					/>
				</motion.div>
			)}
			{isMobile && (
				<motion.div style={{ height: '23vh', position: 'relative' }}>
					<Image
						src="/images/Transition_VF_V3.png"
						alt="transition"
						// height={1080}
						// width={1920}
						fill
						style={{
							opacity: 0.3,
							mask: 'linear-gradient(transparent, white 50%, transparent)'
						}}
					/>
				</motion.div>
			)}
		</section>
	);
}

export default TransitionSVG;
