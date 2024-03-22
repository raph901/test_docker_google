/* eslint-disable */
'use client';
import { useEffect, useState } from 'react';
import Analyse from '@/components/Analyse/Analyse';
import Hero from '@/components/Hero/Hero';
import InteractiveMap from '@/components/InteractiveMap/InteractiveMap';
import InteractiveMapResponsive from '@/components/InteractiveMap/InteractiveMapResponsive/InteractiveMapResponsive';
import News from '@/components/News/News';
import OurMission from '@/components/OurMission/OurMission';
import OurScientificLeaders from '@/components/OurScientificLeaders/OurScientificLeaders';
import SubMap from '@/components/SubMap/SubMap';
import TransitionSVG from '@/components/TransitionSVG/TransitionSVG';
import TechBioCompany from '@/components/TechBioCompany/TechBioCompany';
import WhatWeDo from '@/components/WhatWeDo/WhatWeDo';
import GradientBottom from '@/components/GradientBottom/GradientBottom';
import AnalyseResponsive from '@/components/Analyse/AnalyseResponsive/AnalyseResponsive';

export default function Home() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		window.addEventListener('resize', handleResize);
		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);
	return (
		<>
			<Hero />
			<News />
			<OurMission />
			<TransitionSVG background="linear-gradient(to bottom,#FEFAF6 50%, #fff 100%)" />
			{isMobile ? <AnalyseResponsive /> : <Analyse />}
			<WhatWeDo />
			<TransitionSVG background="linear-gradient(to top,#FEFAF6 50%, #fff 100%)" />
			{isMobile ? <InteractiveMapResponsive /> : <InteractiveMap />}
			<SubMap />
			<TransitionSVG background="linear-gradient(to bottom,#FEFAF6 50%, #fff 100%)" />
			<TechBioCompany />
			<OurScientificLeaders />
			<GradientBottom props={{showGradient2: false}} />
		</>
	);
}
