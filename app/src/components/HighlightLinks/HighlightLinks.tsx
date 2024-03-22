import styles from './HighlightLinks.module.scss';
import TitleSection from '@/components/TitleSection/TitleSection';
import React from 'react';
import ArrowLink from '@/components/ArrowLink/ArrowLink';

export type Link = {
	title: string;
	text: string;
	textHref: string;
	href: string;
};

type HighlightLinksProps = {
	props?: {
		background?: string;
		links: Link[];
	};
};

const HighlightLinks = ({ props }: HighlightLinksProps) => {
	const defaultBackground =
		'linear-gradient(180deg, rgba(254,250,246,1) 0%, rgba(255,255,255,0.9570028695071778) 51%, rgba(254,250,246,1) 100%);';

	return (
		<div
			className={styles.container}
			style={{ background: props?.background ?? defaultBackground }}
		>
			<div className={styles.linksContainer}>
				{props?.links?.map((link, index) => (
					<div key={index} className={styles.highlightLinkcontainer}>
						<TitleSection label={link.title} />
						<p>{link.text}</p>
						<ArrowLink
							props={{
								title: `${link.textHref}`,
								link: `${link.href}`
							}}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default HighlightLinks;
