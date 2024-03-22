'use client'

import React, { useEffect } from 'react';
import GradientBottom from '@/components/GradientBottom/GradientBottom';
import HighlightLinks, {
	Link
} from '@/components/HighlightLinks/HighlightLinks';
import CareersIsole from '@/components/CareersIsole/CareersIsole';

export default function CareerIsolePage() {
	const links: Link[] = [
		{
			title: 'PRESS',
			text: 'Medias analyse our adventure and share our story with you.',
			textHref: 'Discover',
			href: '/press'
		},
		{
			title: 'CONTACT US',
			text: 'Want to get in touch? Reach out to our team',
			textHref: 'Contact Us',
			href: '/contact-us'
		}
	];

	useEffect(() => {
		document.title = "Cure51 - Career"
	}, []);

	return (
		<>
			<CareersIsole />
			<HighlightLinks props={{ background: 'white', links: links }} />
			<GradientBottom props={{ showGradient2: true }} />
		</>
	);
}
