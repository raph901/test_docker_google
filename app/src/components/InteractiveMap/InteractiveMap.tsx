import React from 'react';
import styles from './InteractiveMap.module.scss';
import Map from './Map/Map';
import TitleSection from '../TitleSection/TitleSection';
function InteractiveMap() {
	return (
		<section className={styles.interactiveMap}>
			<div className={styles.container}>
				<div className={styles.titleContainer}>
					<TitleSection label="OUR NETWORK" />
					<div className={styles.subtitleContainer}>
						<h2 className={styles.subtitle}>
							We are a TechBio company co-founded with
							<br />
							<span>
								leading international oncology
								<br />
								centers and researchers from over 35 countries.
							</span>
						</h2>
					</div>
				</div>
				<Map />
			</div>
		</section>
	);
}

export default InteractiveMap;
