'use client';
import React, { useState } from 'react';
import styles from './WhatWeDoDescktop.module.scss';
import FirstPatient from '../FirstPatient/FirstPatient';
import SecondPatient from '../SecondPatient/SecondPatient';
import ThirdPatient from '../ThirdPatient/ThirdPatient';

function WhatWeDoDescktop() {
	return (
		<div className={styles.allCardContainer}>
			<FirstPatient />
			<SecondPatient />
			<ThirdPatient />
		</div>
	);
}

export default WhatWeDoDescktop;
