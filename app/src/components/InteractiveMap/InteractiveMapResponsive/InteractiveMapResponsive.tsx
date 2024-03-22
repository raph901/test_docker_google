import React from 'react';
import styles from './InteractiveMapResponsive.module.scss';
import Image from 'next/image';
import ContinentText from '../Map/ContinentText/ContinentText';
import {
	americaContinent,
	europeContinent,
	africaContinent,
	asiaContinent
} from '@/utils/interactiveMap';
function InteractiveMapResponsive() {
	return (
		<section className={styles.interactiveMap}>
			<div className={styles.container}>
				<div className={styles.titleContainer}>
					<div className={styles.firstTitleContainer}>
						<h1 className={styles.firstTitle}>OUR NETWORK</h1>
					</div>
					<div className={styles.subtitleContainer}>
						<h2 className={styles.subtitle}>
							We are a TechBio company Co-founded with
							<br />
							<span>
								leading international oncology centers and
								researchers.
							</span>
						</h2>
					</div>
				</div>
				<div style={{ width: '100%', marginTop: '2vh' }}>
					<Image
						src="/images/interactiveMap/mapResponsive2.png"
						alt="Mapresponsive"
						width={340}
						height={210}
						style={{ width: '100%' }}
					/>
				</div>
				<div className={styles.continentContainer}>
					<ContinentText
						continent={europeContinent}
						className={styles.europe}
					/>
					<ContinentText
						continent={americaContinent}
						className={styles.america}
					/>
					<ContinentText
						continent={asiaContinent}
						className={styles.america}
					/>
					<ContinentText
						continent={africaContinent}
						className={styles.america}
					/>
				</div>
				{/* <Map /> */}
			</div>
		</section>
	);
}

export default InteractiveMapResponsive;
