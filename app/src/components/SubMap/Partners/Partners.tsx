'use client';

import React from 'react';
import styles from './Partners.module.scss';
import GetPartners from '@/services/partners/GetPartners';
import PartnerCard from '@/components/SubMap/Partners/PartnerCard/PartnerCard';
import Image from 'next/image';
function Partners() {
	const partners = GetPartners();

	return (
		<div className={styles.partners}>
			<div className={styles.partnersContainer}>

				{partners.map((partner, index) => (
					<PartnerCard key={index} partner={partner} />
				))}

			</div>
		</div>
	);
}

export default Partners;
