import React from 'react';
import { motion } from 'framer-motion';
import styles from './PillSvg.module.scss';
interface Props {
	startTransition: boolean;
}
interface Props {
	startTransition: boolean;
}
function PillSvg({ startTransition }: Props) {
	const startAnimation = {
		hidden: {
			opacity: 1
		},
		visible: {
			opacity: 1,
			transition: {
				duration: 0.2
			}
		}
	};
	const lineAnimation = {
		hidden: {
			opacity: 0,
			pathLength: 0
		},
		visible: {
			opacity: 1,
			pathLength: 1,
			transition: {
				delay: 0.4,
				duration: 1
			}
		}
	};
	const circleAnimation = {
		hidden: {
			opacity: 0,
			pathLength: 0
		},
		visible: {
			opacity: 1,
			pathLength: 1,
			transition: {
				delay: 0.6,
				duration: 1
			}
		}
	};
	const pillLeftAnimation = {
		hidden: {
			opacity: 0,
			pathLength: 0,
			y: -7,
			rotate: -15
		},
		visible: {
			opacity: 1,
			pathLength: 1,
			x: 60,
			y: -21,
			transition: {
				opacity: {
					delay: 1.2,
					duration: 0.6
				},
				y: {
					delay: 2.2,
					duration: 0.6
				},
				x: {
					delay: 2.2,
					duration: 0.6
				}
			}
		}
	};
	const pillRightAnimation = {
		hidden: {
			opacity: 0,
			pathLength: 0,
			y: -9,
			x: 5,
			rotate: -15
		},
		visible: {
			opacity: 1,
			pathLength: 1,
			y: 6,
			x: -40,
			transition: {
				opacity: {
					delay: 1.2,
					duration: 0.6
				},
				y: {
					delay: 2.2,
					duration: 0.6
				},
				x: {
					delay: 2.2,
					duration: 0.6
				}
			}
		}
	};
	const lineForPillRightAnimation = {
		hidden: {
			opacity: 0,
			pathLength: 0,
			y: 0,
			x: 5
		},
		visible: {
			opacity: 1,
			pathLength: 1,
			y: 15,
			x: -39,
			transition: {
				opacity: {
					delay: 1.2,
					duration: 0.6
				},
				y: {
					delay: 2.2,
					duration: 0.6
				},
				x: {
					delay: 2.2,
					duration: 0.6
				}
			}
		}
	};
	const groupScale = {
		hidden: {
			opacity: 1,
			scale: 1
		},
		visible: {
			opacity: 0,
			scale: 0,
			pathLength: 0,
			transition: {
				delay: 2.4,
				duration: 1
			}
		}
	};
	// const endOfAnimation = {
	//     hidden: {
	//         opacity: 1,
	//     },
	//     visible: {
	//         opacity: 0,
	//         transition: {
	//             delay: 6,
	//             duration: 1,
	//         }
	//     }
	// }

	return (
		<div>
			<svg
				width="286"
				height="160"
				viewBox="0 0 286 160"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				// style={{
				// 	zIndex: '-1',
				// 	position: 'absolute',
				// 	transform: 'translatey(-5vh)'
				// }}
				className={styles.baseSvg}
			>
				<g filter="url(#filter0_dd_1168_47900)">
					<path
						d="M141.822 11.9944L273.498 79.8242L141.822 147.643L11.9994 79.819L141.822 11.9944Z"
						fill="white"
					/>
				</g>
				<defs>
					<filter
						id="filter0_dd_1168_47900"
						x="0"
						y="-0.00561523"
						width="285.496"
						height="159.648"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood
							flood-opacity="0"
							result="BackgroundImageFix"
						/>
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dx="3" dy="3" />
						<feGaussianBlur stdDeviation="4.5" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0.59038 0 0 0 0 0.450102 0 0 0 0 0.977091 0 0 0 0.15 0"
						/>
						<feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect1_dropShadow_1168_47900"
						/>
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dx="-3" dy="-3" />
						<feGaussianBlur stdDeviation="4.5" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 1 0 0 0 0 0.715284 0 0 0 0 0.552322 0 0 0 0.15 0"
						/>
						<feBlend
							mode="normal"
							in2="effect1_dropShadow_1168_47900"
							result="effect2_dropShadow_1168_47900"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect2_dropShadow_1168_47900"
							result="shape"
						/>
					</filter>
				</defs>
			</svg>
			<motion.svg
				width="195"
				height="98"
				viewBox="0 0 195 98"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				// style={{ transform: 'translateY(-3vh) translateX(4vh)' }}
				className={styles.pillSvg}
			>
				<motion.g
					initial="hidden"
					animate={startTransition && 'visible'}
				>
					<motion.g variants={groupScale}>
						<motion.circle
							variants={startAnimation}
							cx="91"
							cy="54.9999"
							r="9"
							fill="black"
							stroke="black"
							stroke-width="2"
						/>
						<motion.circle
							variants={circleAnimation}
							cx="116"
							cy="58.9999"
							r="6"
							stroke="black"
							stroke-width="2"
						/>
						<motion.path
							variants={lineAnimation}
							d="M100 56.4999L109.5 57.9999"
							stroke="black"
							stroke-width="2"
						/>
						<motion.circle
							variants={circleAnimation}
							cx="76.8984"
							cy="35.8995"
							r="6"
							transform="rotate(-135 76.8984 35.8995)"
							stroke="black"
							stroke-width="2"
						/>
						<motion.path
							variants={lineAnimation}
							d="M86.4453 48.981L80.7885 41.2028"
							stroke="black"
							stroke-width="2"
						/>
						<motion.circle
							variants={circleAnimation}
							cx="71.5"
							cy="62.4995"
							r="2.5"
							fill="black"
							stroke="black"
							stroke-width="2"
						/>
						<motion.path
							variants={lineAnimation}
							d="M73 61.6792L82.0065 58.3053"
							stroke="black"
							stroke-width="2"
						/>
						<motion.circle
							variants={circleAnimation}
							cx="106"
							cy="39.9999"
							r="4"
							stroke="black"
							stroke-width="2"
						/>
						<motion.path
							variants={lineAnimation}
							d="M97 48.7245L103.75 41.8732"
							stroke="black"
							stroke-width="2"
						/>
						<motion.circle
							variants={circleAnimation}
							cx="90.3235"
							cy="76.1505"
							r="4"
							transform="rotate(135 90.3235 76.1505)"
							stroke="black"
							stroke-width="2"
						/>
						<motion.path
							variants={lineAnimation}
							d="M90.5195 63.6174L90.5913 73.2349"
							stroke="black"
							stroke-width="2"
						/>
					</motion.g>
					<motion.rect
						variants={pillRightAnimation}
						x="113.225"
						y="19.5257"
						width="70.7097"
						height="45.9884"
						rx="22.9942"
						transform="rotate(-15 113.225 19.5257)"
						stroke="black"
						stroke-width="2"
					/>
					<motion.rect
						variants={pillLeftAnimation}
						x="1.22474"
						y="52.0422"
						width="59.0761"
						height="45.9884"
						rx="22.9942"
						transform="rotate(-15 1.22474 52.0422)"
						fill="url(#paint0_linear_1168_48331)"
						stroke="black"
						stroke-width="2"
					/>
					<motion.path
						variants={lineForPillRightAnimation}
						d="M145.491 58.2255C154.15 55.9054 161.225 44.1841 157.953 31.9712C154.68 19.7583 142.299 11.6786 133.641 13.9987"
						stroke="black"
						stroke-width="2"
					/>
					<defs>
						<linearGradient
							id="paint0_linear_1168_48331"
							x1="13.4843"
							y1="51.3351"
							x2="58.1109"
							y2="61.163"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color="#FFB68D" />
							<stop offset="1" stop-color="#9773F9" />
						</linearGradient>
					</defs>
				</motion.g>
			</motion.svg>
		</div>
	);
}

export default PillSvg;
