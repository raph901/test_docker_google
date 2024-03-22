'use client'

import React, { useEffect } from 'react';
import styles from './CareersIsole.module.scss';
import TitleSection from '../TitleSection/TitleSection';
import Image from 'next/image';
import ArrowLink from '../ArrowLink/ArrowLink';
import { useSearchParams } from 'next/navigation';
import GetCareerByTitle, {Career} from '@/services/careers/GetIsolateCareer';
import Link from 'next/link';

function CareersIsole() {
	const params = useSearchParams();
	let career: Career;
	const titleCareer = params.get("title");
	career = GetCareerByTitle(titleCareer ? titleCareer : "");

	return (
		<div className={styles.container}>
			<div className={styles.contentContainer}>
				<div>
					<Link href="/careers" className={styles.cursor}>
						<TitleSection label="CAREERS" />
					</Link>
				</div>
				<div className={styles.titlePage}>
					<p>{career.title}</p>
				</div>
				<div className={styles.containerDescription}>
					<Image
						src="/images/test23.png"
						width={770}
						height={400}
						alt=""
						className={styles.image}
					/>
					<div className={styles.description}>
						<div className={styles.tagDescription}>
							<div className={styles.containerTags}>
								{career?.tags.map((tag, index) => (
									<p key={index}>{tag}</p>
								))}
							</div>
						</div>
						<div className={styles.textDescription}>
							<p>{career?.content}</p>
						</div>
						<div>
							<ArrowLink
								props={{
									title: 'Apply Now',
									link: '/contact-us',
									isColor: true
								}}
							/>
						</div>
					</div>
				</div>
				<div>
					<div className={styles.title}>
						<TitleSection label="RESPONSABILITIES" />
					</div>
					<div className={styles.listeDynamique}>
						<ul>
							{career?.responsabilities?.split('--').map((element) => (
								<>
									{ element !== '' ? <li className={styles.liste} key={element}>
										{element}
									</li> : ""}
								</>
							))}
						</ul>
					</div>
				</div>
				<div>
					<div className={styles.title}>
						<TitleSection label="QUALIFICATIONS" />
					</div>
					<div className={styles.listeDynamique}>
						<ul>
							{career.qualifications?.split("--").map((element) => (
								<>
									{ element !== '' ? <li className={styles.liste} key={element}>
										{element}
									</li> : ""}
								</>
							))}
						</ul>
					</div>
				</div>
				<div>
					<div className={styles.title}>
						<TitleSection label="OTHER KEY ATTRIBUTES" />
					</div>
					<div className={styles.listeDynamique}>
						<ul>
							{career.otherkeyattributes?.split("--").map((element) => (
								<>
									{ element !== '' ? <li className={styles.liste} key={element}>
										{element}
									</li> : ""}
								</>
							))}
						</ul>
					</div>
				</div>
				<div>
					<ArrowLink
						props={{
							title: 'Apply Now',
							link: '/contact-us',
							isColor: true
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default CareersIsole;
