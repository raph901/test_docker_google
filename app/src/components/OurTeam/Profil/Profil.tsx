import Image from 'next/image';
import styles from './Profil.module.scss';
import TitleSection from '@/components/TitleSection/TitleSection';
import React from 'react';

type ProfilProps = {
	profil: {
		link: string;
		firstName: string;
		lastName: string;
		title: string;
	};
};

export default function Profil({ profil }: ProfilProps) {
	return (
		<div className={styles.container}>
			<div className={styles.profil}>
				<div className={styles.imgContainer}>
					<Image
						src={profil.link}
						className={styles.img}
						alt={`${profil.firstName} ${profil.lastName}`}
						width={0}
						height={0}
					/>
				</div>
				<div className={styles.textContainer}>
					<p
						className={styles.identity}
					>{`${profil.firstName} ${profil.lastName}`}</p>
					<p className={styles.title}>{profil.title}</p>
				</div>
			</div>
		</div>
	);
}
