'use client';

import ContactUsForm from '@/app/contact-us/form/ContactUsForm';
import styles from './page.module.scss';
import { useEffect } from 'react';
export default function ContactUsPage() {
	useEffect(() => {
		document.title = "Cure51 - Contact Us"
	}, []);

	return (
		<div className={styles.contactPageContainer}>
			<ContactUsForm></ContactUsForm>
		</div>
	);
}
