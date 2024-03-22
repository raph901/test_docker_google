'use client'

import React, { useEffect } from 'react';
import PageTitle from '@/components/PageTitle/PageTitle';
import styles from './page.module.scss';
import Paragraph from './Paragraph/Paragraph';
function LegalNoticePage() {
	const LegalNotice = [
		{
			title: '1 - Lorem ipsum, dolor',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Magnam fugiat dolore iusto magni tenetur, temporevoluptas aperiam sequi quibusdam, doloremque ratione.Placeat et magni odio porro vel nihil dolor soluta!'
		},
		{
			title: '2 - Lorem ipsum, dolor',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Magnam fugiat dolore iusto magni tenetur, temporevoluptas aperiam sequi quibusdam, doloremque ratione.Placeat et magni odio porro vel nihil dolor soluta!'
		},
		{
			title: '3 - Lorem ipsum, dolor',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Magnam fugiat dolore iusto magni tenetur, temporevoluptas aperiam sequi quibusdam, doloremque ratione.Placeat et magni odio porro vel nihil dolor soluta!'
		}
	];

	useEffect(() => {
		document.title = "Cure51 - Legal Notice"
	}, []);

	return (
		<div>
			<PageTitle
				page={{
					// title: 'LEGAL NOTICE',
					buttonCaption: 'LEGAL NOTICE'
				}}
			/>
			<div className={styles.container}>
				{LegalNotice.map((notice, index) => (
					<Paragraph
						key={index}
						title={notice.title}
						text={notice.text}
					/>
				))}
			</div>
		</div>
	);
}

export default LegalNoticePage;
