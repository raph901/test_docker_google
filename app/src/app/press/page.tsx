'use client'

import React, { useEffect } from 'react';
import HighlightLinks, { Link } from '@/components/HighlightLinks/HighlightLinks';
import GradientBottom from '@/components/GradientBottom/GradientBottom';
import PageTitle from '@/components/PageTitle/PageTitle';
import Presses from '@/components/Presses/Presses';

export default function AboutUs() {
	const links: Link[] = [{
		title: "CAREERS",
		text: "Interested in a career with us? Explore available opportunities.",
		textHref: "View available offers",
		href: "/careers"
	}, {
		title: "CONTACT US",
		text: "Want to get in touch? Reach out to our team.",
		textHref: "Contact Us",
		href: "/contact-us"
	}];

	useEffect(() => {
		document.title = "Cure51 - Press"
	}, []);

	return (
		<>
			<PageTitle page={{title: "Medias analyse our adventure and share our story with you. Here is our selection of press releases.", buttonCaption: "PRESS"}} />
			<Presses />
			<HighlightLinks props={{background: "white", links: links}} />
			<GradientBottom props={{showGradient2: true}} />
		</>
);
}
