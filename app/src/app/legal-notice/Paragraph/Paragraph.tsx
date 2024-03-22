import React from 'react';
import styles from './Paragraph.module.scss';

interface ParagraphProps {
	title: string;
	text: string;
}

function Paragraph({ title, text }: ParagraphProps) {
	return (
		<div className={styles.textContainer}>
			<h2 className={styles.title}>{title}</h2>
			<p className={styles.text}>{text}</p>
		</div>
	);
}

export default Paragraph;
