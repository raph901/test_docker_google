'use client';

import Image from 'next/image';
import styles from './Logo.module.scss';
import Link from 'next/link';

import { motion } from 'framer-motion';

export const LogoHome = () => {
	const firstDraw = {
		hidden: { pathLength: 0, opacity: 0 },
		visible: ({ i = 0, d = 0.5 }) => {
			const delay = 0 + i * 0.1;
			const duration = d;
			return {
				pathLength: 1,
				opacity: 1,
				transition: {
					pathLength: {
						delay,
						type: 'spring',
						duration: duration,
						bounce: 0
					},
					opacity: { delay, duration: duration }
				}
			};
		}
	};
	const secondDraw = {
		hidden: { pathLength: 0, opacity: 0, display: 'none' },
		visible: ({ i = 0, d = 0 }) => {
			const delay = 2.75 + i * 0.1;
			return {
				pathLength: 1,
				opacity: 1,
				display: 'block',
				transition: {
					pathLength: {
						delay,
						type: 'spring',
						duration: d ? d : 1,
						bounce: 0
					},
					opacity: { delay, duration: d | 0.5 },
					display: { delay: 3 }
				}
			};
		}
	};
	const removeNoneDisplay = {
		none: {
			display: 'none'
		},
		block: {
			display: 'block'
		}
	};
	const removeSvg = {
		visible: {
			opacity: 1
		},
		hidden: {
			opacity: 0,
			transition: {
				visibility: { delay: 2 },
				opacity: { delay: 1, duration: 0.65 }
			},
			transitionEnd: {
				display: 'none'
			}
		}
	};
	return (
		<motion.div className={styles.logo}>
			<motion.div
				className={styles.animeSvgCure511}
				initial="hidden"
				animate="visible"
				// variants={removeNoneDisplay}
			>
				<Link href="/">
					<motion.div className={styles.animeSvgCure51}>
						<motion.svg
							// width="164"
							// height="56"
							viewBox="0 0 164 56"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							// initial="hidden"
							// animate="visible"
						>
							<g clip-path="url(#clip0_1168_48549)">
								<motion.path
									id="cTop"
									d="M33.3019 20.7721C33.3019 11.3675 26.196 3.74186 17.4322 3.74186C8.66843 3.74186 1.5625 11.3675 1.5625 20.7721V24.5"
									stroke="#F96300"
									stroke-width="3.5762"
									stroke-miterlimit="8"
									style={{ strokeWidth: 3.5762 }}
									variants={secondDraw}
									custom={{ i: 0 }}
								/>
								<motion.path
									id="cBot"
									d="M33.3019 36.7279C33.3019 46.1325 26.196 53.7581 17.4322 53.7581C8.66843 53.7581 1.5625 46.1325 1.5625 36.7279V33"
									stroke="#F96300"
									stroke-width="3.5762"
									stroke-miterlimit="8"
									style={{ strokeWidth: 3.5762 }}
									variants={secondDraw}
									custom={{ i: 0 }}
								/>

								<motion.path
									d="M46.9648 2V36.5347C46.9648 45.9393 54.0708 53.5649 62.8346 53.5649C71.5983 53.5649 78.7042 45.9393 78.7042 36.5347V2"
									stroke="#F96300"
									stroke-width="3.5762"
									stroke-miterlimit="8"
									style={{ strokeWidth: 3.5762 }}
									variants={secondDraw}
									custom={{ i: 1 }}
								/>

								<motion.path
									d="M92.3789 3.7666H106.04C114.804 3.7666 121.91 11.3922 121.91 20.7968C121.91 30.2015 114.804 37.8271 106.04 37.8271H92.3789"
									stroke="#F96300"
									stroke-width="3.5762"
									stroke-miterlimit="8"
									style={{ strokeWidth: 3.5762 }}
									variants={secondDraw}
									custom={{ i: 2 }}
								/>
								<motion.path
									d="M108.379 37.8281L121.909 53.565"
									stroke="#F96300"
									stroke-width="3.5762"
									stroke-miterlimit="8"
									style={{ strokeWidth: 3.5762 }}
									variants={secondDraw}
									custom={{ i: 3 }}
								/>
								<motion.path
									d="M141.75 28.5H155.75"
									stroke="#F96300"
									stroke-width="3.5762"
									stroke-miterlimit="8"
									style={{ strokeWidth: 3.5762 }}
									variants={secondDraw}
									custom={{ i: 4, d: 0 }}
								/>
								<motion.path
									d="M132.152 53.5H163.892"
									stroke="#F96300"
									stroke-width="3.5762"
									stroke-miterlimit="8"
									style={{ strokeWidth: 3.5762 }}
									variants={secondDraw}
									custom={{ i: 4.25, d: 0 }}
								/>
								<motion.path
									d="M132.152 3.7998H163.892"
									stroke="#F96300"
									stroke-width="3.5762"
									stroke-miterlimit="8"
									style={{ strokeWidth: 3.5762 }}
									variants={secondDraw}
									custom={{ i: 4.5, d: 0 }}
								/>

								<motion.path
									id="5"
									d="M133.185 28.2204H136.11L136.638 28.787V31.441L136.11 32H132.602V31.3738H135.873L136.054 31.1725V29.048L135.873 28.8467H133.185H132.602V28.2204V25.6262V25.328V25H136.638V25.6262H133.185V28.2204Z"
									stroke="#F96300"
									stroke-width="1.16226"
									stroke-miterlimit="8"
									variants={secondDraw}
									custom={{ i: 4.75 }}
								/>
								<motion.path
									id="1"
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M162.669 31.3738V25H162.086V26.8115H160.266V27.4378H162.086V31.3738H161.245V32H163.517V31.3738H162.669Z"
									stroke="#F96300"
									stroke-width="1.48052"
									stroke-miterlimit="8"
									variants={secondDraw}
									custom={{ i: 5 }}
								/>
							</g>
							<defs>
								<clipPath id="clip0_1168_48549">
									<rect
										width="164"
										height="56"
										fill="white"
									/>
								</clipPath>
							</defs>
						</motion.svg>
					</motion.div>
				</Link>
			</motion.div>
			<motion.div
				className={styles.animeSvgCure51Container}
				initial="visible"
				animate="hidden"
				variants={removeSvg}
			>
				<motion.div className={styles.animeSvgCure51}>
					<motion.svg
						width="164"
						height="56"
						viewBox="0 0 164 56"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						initial="hidden"
						animate="visible"
					>
						<g clip-path="url(#clip0_1168_48549)">
							<motion.path
								id="cTop"
								d="M33.3019 20.7721C33.3019 11.3675 26.196 3.74186 17.4322 3.74186C8.66843 3.74186 1.5625 11.3675 1.5625 20.7721V24.5"
								stroke="#F96300"
								stroke-width="3.5762"
								stroke-miterlimit="8"
								style={{ strokeWidth: 3.5762 }}
								variants={firstDraw}
								custom={{ i: 0 }}
							/>
							<motion.path
								id="cBot"
								d="M33.3019 36.7279C33.3019 46.1325 26.196 53.7581 17.4322 53.7581C8.66843 53.7581 1.5625 46.1325 1.5625 36.7279V33"
								stroke="#F96300"
								stroke-width="3.5762"
								stroke-miterlimit="8"
								style={{ strokeWidth: 3.5762 }}
								variants={firstDraw}
								custom={{ i: 0 }}
							/>

							<motion.path
								d="M46.9648 2V36.5347C46.9648 45.9393 54.0708 53.5649 62.8346 53.5649C71.5983 53.5649 78.7042 45.9393 78.7042 36.5347V2"
								stroke="#F96300"
								stroke-width="3.5762"
								stroke-miterlimit="8"
								style={{ strokeWidth: 3.5762 }}
								variants={firstDraw}
								custom={{ i: 1 }}
							/>

							<motion.path
								d="M92.3789 3.7666H106.04C114.804 3.7666 121.91 11.3922 121.91 20.7968C121.91 30.2015 114.804 37.8271 106.04 37.8271H92.3789"
								stroke="#F96300"
								stroke-width="3.5762"
								stroke-miterlimit="8"
								style={{ strokeWidth: 3.5762 }}
								variants={firstDraw}
								custom={{ i: 2 }}
							/>
							<motion.path
								d="M108.379 37.8281L121.909 53.565"
								stroke="#F96300"
								stroke-width="3.5762"
								stroke-miterlimit="8"
								style={{ strokeWidth: 3.5762 }}
								variants={firstDraw}
								custom={{ i: 3 }}
							/>
							<motion.path
								d="M141.75 28.5H155.75"
								stroke="#F96300"
								stroke-width="3.5762"
								stroke-miterlimit="8"
								style={{ strokeWidth: 3.5762 }}
								variants={firstDraw}
								custom={{ i: 4, d: 0.5 }}
							/>
							<motion.path
								d="M132.152 53.5H163.892"
								stroke="#F96300"
								stroke-width="3.5762"
								stroke-miterlimit="8"
								style={{ strokeWidth: 3.5762 }}
								variants={firstDraw}
								custom={{ i: 4.5, d: 0.5 }}
							/>
							<motion.path
								d="M132.152 3.7998H163.892"
								stroke="#F96300"
								stroke-width="3.5762"
								stroke-miterlimit="8"
								style={{ strokeWidth: 3.5762 }}
								variants={firstDraw}
								custom={{ i: 5, d: 0.5 }}
							/>

							<motion.path
								id="5"
								d="M133.185 28.2204H136.11L136.638 28.787V31.441L136.11 32H132.602V31.3738H135.873L136.054 31.1725V29.048L135.873 28.8467H133.185H132.602V28.2204V25.6262V25.328V25H136.638V25.6262H133.185V28.2204Z"
								stroke="#F96300"
								stroke-width="1.16226"
								stroke-miterlimit="8"
								variants={firstDraw}
								custom={{ i: 6 }}
							/>
							<motion.path
								id="1"
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M162.669 31.3738V25H162.086V26.8115H160.266V27.4378H162.086V31.3738H161.245V32H163.517V31.3738H162.669Z"
								stroke="#F96300"
								stroke-width="1.48052"
								stroke-miterlimit="8"
								variants={firstDraw}
								custom={{ i: 7 }}
							/>
						</g>
						<defs>
							<clipPath id="clip0_1168_48549">
								<rect width="164" height="56" fill="white" />
							</clipPath>
						</defs>
					</motion.svg>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export const Logo = () => {
	return (
		<div>
			<Link href="/">
				<Image
					src="images/CURE51_Logo_Orange.svg"
					alt="Logo"
					width={164}
					height={56}
					style={{ cursor: 'pointer' }}
				/>
			</Link>
		</div>
	);
};
