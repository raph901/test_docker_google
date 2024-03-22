import ArrowLink from '@/components/ArrowLink/ArrowLink';
import React from 'react';
import styles from "./Career.module.scss"

type CareerProps = {
	career : {
		title: string;
		tags: string[];
		link: string;
	}
}


const Career = ({career}: CareerProps) => {
	return (
		<div className={styles.container}>
			<p>{career.title}</p>

			<div className={styles.containerTags}>
				{career.tags.map((tag, index) => (
					<p key={index}>{tag}</p>
				))}
			</div>
			{/*{career.bubbles.map((bubble, index) => (*/}
			{/*	<div key={index}></div>*/}
			{/*))}*/}
			<ArrowLink props={{ title: "View", link: `/careers-isole?title=${encodeURIComponent(career.title)}` }} />
		</div>
	);
}

export default Career;
