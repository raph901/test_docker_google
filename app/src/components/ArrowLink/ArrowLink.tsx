'use client';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import styles from './ArrowLink.module.scss';

type ArrowLinkProps = {
	props: {
		title: string;
		link: string;
		isColor?: boolean;
	};
};

const ArrowLink = ({ props }: ArrowLinkProps) => {
	const ref = useRef(null);
	const [isHovered, setIsHovered] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		setIsMobile(window.innerWidth <= 768);
	}, []);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	return (
		<div
			className={styles.linkContainer}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<svg
				className={styles.linkImage}
				width="24"
				height="25"
				viewBox="0 0 24 25"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g id="arrow-right-circle">
					<path
						ref={ref}
						id="Vector"
						d="M16 12.4023H8M21 12.4023C21 13.5842 20.7672 14.7546 20.3149 15.8465C19.8626 16.9384 19.1997 17.9306 18.364 18.7663C17.5282 19.602 16.5361 20.265 15.4442 20.7173C14.3522 21.1696 13.1819 21.4023 12 21.4023C10.8181 21.4023 9.64778 21.1696 8.55585 20.7173C7.46392 20.265 6.47177 19.602 5.63604 18.7663C4.80031 17.9306 4.13738 16.9384 3.68508 15.8465C3.23279 14.7546 3 13.5842 3 12.4023C3 10.0154 3.94821 7.72621 5.63604 6.03838C7.32387 4.35056 9.61305 3.40234 12 3.40234C14.3869 3.40234 16.6761 4.35056 18.364 6.03838C20.0518 7.72621 21 10.0154 21 12.4023Z"
						stroke={
							props.isColor
								? '#f05801'
								: isHovered
								? '#f05801'
								: 'black'
						}
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						id="Vector_2"
						d="M13 15.4023L15.913 12.4893C15.9244 12.4779 15.9335 12.4644 15.9397 12.4494C15.9459 12.4345 15.9491 12.4185 15.9491 12.4023C15.9491 12.3862 15.9459 12.3702 15.9397 12.3553C15.9335 12.3403 15.9244 12.3268 15.913 12.3153L13 9.40234"
						stroke={
							props.isColor
								? '#f05801'
								: isHovered
								? '#f05801'
								: 'black'
						}
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</g>
			</svg>
			<Link
				href={props.link}
				className={styles.link}
				style={{ color: props.isColor ? '#f05801' : '' }}
			>
				{props.title}
			</Link>
		</div>
	);
};

export default ArrowLink;
