import Profil from '@/components/OurTeam/Profil/Profil';
import styles from './OurTeam.module.scss';
import TitleSection from '@/components/TitleSection/TitleSection';
import React from 'react';
import GetTeam from '@/services/team/GetTeam';

export default function OurTeam() {
	const ourTeam = GetTeam();

	return (
		<div className={styles.container}>
			<TitleSection label="OUR TEAM" />
			<div className={styles.ourTeam}>
				{ourTeam.map((profil, index) => (
					<div className={styles.profil} key={index}>
						<Profil profil={profil} />
					</div>
				))}
			</div>
		</div>
	);
}
