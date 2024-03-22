'use client';

import React from 'react';
import styles from './AnalyseResponsive.module.scss';
import Image from 'next/image';
import CenterWrapper from '../../CenterWrapper/CenterWrapper';

function AnalyseResponsive() {
	return (
		<CenterWrapper>
			<section className={styles.analyse}>
				<div className={styles.container}>
					<div className={styles.FirstContent}>
						<div className={styles.imageContainerUp}>
							<Image
								src="/images/analyse/analyse1.png"
								alt="analyse-1"
								fill
							/>
						</div>
						<h3 className={styles.text}>
							Patients with Cancer who respond exceptionally well
							to therapy may have molecular changes in their
							tumors that explain their response.{' '}
						</h3>
					</div>
					<div className={styles.FirstContent}>
						<div className={styles.imageContainerDown}>
							<Image
								src="/images/analyse/analyse2.png"
								alt="analyse-2"
								fill
							/>
						</div>
						<h3 className={styles.text}>
							A comprehensive analysis of these Outliers may help to contribute to the development of potential new treatments.
						</h3>
					</div>
				</div>
			</section>
		</CenterWrapper>
	);
}

export default AnalyseResponsive;
