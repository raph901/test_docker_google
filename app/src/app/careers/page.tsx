'use client'

import React, { useEffect } from 'react';
import GradientBottom from '@/components/GradientBottom/GradientBottom';
import PageTitle from '@/components/PageTitle/PageTitle';
import HighlightLinks, {
	Link
} from '@/components/HighlightLinks/HighlightLinks';
import Careers from '@/components/Careers/Careers';

export default function CareersPage() {
	const links: Link[] = [
		{
			title: 'press',
			text: 'Medias analyse our adventure and share our story with you.',
			textHref: 'Discover',
			href: '/press'
		},
		{
			title: 'contact us',
			text: 'Message contact Us.',
			textHref: 'Contact Us',
			href: '/contact-us'
		}
	];

	useEffect(() => {
		document.title = "Cure51 - Careers"
	}, []);

	return (
		<>
			<PageTitle
				page={{
					title: 'Cure51 gathers talents coming from various areas of expertise all driven by the same passion : cure cancer.',
					buttonCaption: 'careers'
				}}
			/>
			<Careers />
			<HighlightLinks props={{ background: 'white', links: links }} />
			<GradientBottom props={{ showGradient2: true }} />
		</>
	);
}
