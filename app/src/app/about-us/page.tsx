'use client';

import React, { useEffect, useState } from 'react';
import OurExpertises from '@/components/OurExpertises/OurExpertises';
import OurCommunity from '@/components/OurCommunity/OurCommunity';
import TransitionSVG from '@/components/TransitionSVG/TransitionSVG';
import OurTeam from '@/components/OurTeam/OurTeam';
import HighlightLinks, {
	Link
} from '@/components/HighlightLinks/HighlightLinks';
import GradientBottom from '@/components/GradientBottom/GradientBottom';
import PageTitle from '@/components/PageTitle/PageTitle';

export default function AboutUsPage() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		document.title = "Cure51 - About Us"

		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		window.addEventListener('resize', handleResize);
		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);
	const links: Link[] = [
		{
			title: 'CAREERS',
			text: 'Interested in a career with us? Explore available opportunities.',
			textHref: 'View available offers',
			href: '/careers'
		},
		{
			title: 'CONTACT US',
			text: 'Want to get in touch? Reach out to our team.',
			textHref: 'Contact Us',
			href: '/contact-us'
		}
	];
	return (
		<>
			<PageTitle
				page={{
					title: 'At Cure51 our mission is to create the first worldwide database of cancer survivors to leverage their exceptional biological features and find new drugs to cure Cancer.'
				}}
			/>
			<OurExpertises />
			<OurCommunity />
			<TransitionSVG
				background="linear-gradient(to bottom,#fff 50%, #FEFAF6 100%)"
				heightSection={isMobile ? 'auto' : '60vh'}
			/>
			<OurTeam />
			<HighlightLinks props={{ background: 'white', links: links }} />
			<GradientBottom props={{ showGradient2: true }} />
		</>
	);
}
