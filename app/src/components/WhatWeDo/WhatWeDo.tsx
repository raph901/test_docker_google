'use client';
import React, { useEffect, useState } from 'react';
import styles from './WhatWeDo.module.scss';
import WhatWeDoDescktop from './WhatWeDoDescktop/WhatWeDoDescktop';
import WhatWeDoResponsive from './WhatWeDoResponsive/WhatWeDoResponsive';
import TitleSection from '../TitleSection/TitleSection';

function WhatWeDo() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		window.addEventListener('resize', handleResize);
		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<div>
			<div className={styles.whatWeDo}>
				<div className={styles.container}>
					<TitleSection label="WHAT WE DO" />

					<div className={styles.paragraphContainer}>
						<h3 className={styles.firstParagraph}>
							Cure51 focuses on patients
						</h3>
						<h1 className={styles.secondParagraph}>
							who have survived some of the most lethal Cancers.
						</h1>
					</div>
					<div>
						<WhatWeDoDescktop />
					</div>
				</div>
			</div>
		</div>
	);
}

export default WhatWeDo;
