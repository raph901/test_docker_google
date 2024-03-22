import styles from "./Press.module.scss"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ArrowLink from '@/components/ArrowLink/ArrowLink';

type PressProps = {
	press : {
		logo: string;
		content: string;
		link: string;
		date: string;
	}
}

const Press = ({press}: PressProps) => {
	return(
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<Image src={press.logo}
					   className={styles.img}
					   alt=""
					   width={0}
					   height={0} />
			</div>
			<p>{press.content}</p>
			<p className={styles.date}>{press.date}</p>
			<ArrowLink props={{title: "View", link: press.link}} />
		</div>
	);
}

export default Press;
