import React from 'react';
import Button from '../Button/Button';
import styles from './TitleSection.module.scss';

type Title = {
	title: string;
};

type Props = {
	label: string;
	arrayOfSentence?: Title[];
	introduction?: string;
};

const TitleSection = ({ label, arrayOfSentence, introduction }: Props) => {
	return (
		<div className={styles.containnerUp}>
			<Button label={label} />
			<div className={styles.subtitleContainer}>
				<h2 className={styles.subtitle}>
					{introduction && <span> {introduction}</span>}
					{arrayOfSentence?.map(({ title }, index) => (
						<div key={index}>
							<span>{title}</span>
						</div>
					))}
					{/* <span>
						Our proprietary Discovery Platform will be the hub
					</span>
					<br />
					for organizing, analyzing and discovering novel therapeutic
					targets. */}
				</h2>
			</div>
		</div>
	);
};

export default TitleSection;
