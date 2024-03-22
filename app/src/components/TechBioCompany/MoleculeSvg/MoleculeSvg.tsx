import React, { useEffect } from 'react';
import { delay, useAnimate, useInView } from 'framer-motion';
import styles from './Molecule.module.scss';
interface Props {
	startTransition: boolean;
}

function MoleculeSvg({ startTransition }: Props) {
	const [scope, animate] = useAnimate();

	const isInView = useInView(scope);

	useEffect(() => {
		const showAnimation = async () => {
			animate('path', { pathLength: 0 }, { duration: 1 });
			animate(
				'#litleCicle',
				{ cx: 98, cy: 22.6086, r: 2.60857 },
				{ duration: 1, delay: 1 }
			);
			animate(
				'#medium',
				{ cx: 72, cy: 22.2609, r: 17.2609 },
				{ duration: 1, delay: 1 }
			);
			animate(
				'#bigCircle',
				{ cx: 5, cy: 23, r: 21.8262 },
				{ duration: 1, delay: 1 }
			);
			animate(
				'#secondeLitleCircle',
				{ cx: 40, cy: 23, r: 5.52142 },
				{ duration: 1, delay: 1 }
			);
			await animate('line', { opacity: 1, pathLength: 1 }, { delay: 2 });

			animate(
				'#fistLine',
				{ stroke: 'url(#paint0_linear_1168_47785)' },
				{ delay: 0.4 }
			);
			animate(
				'#secondLine',
				{ stroke: 'url(#paint1_linear_1168_47785)' },
				{ delay: 0.4 }
			);
			animate(
				'#thirdLine',
				{ stroke: 'url(#paint2_linear_1168_47785)' },
				{ delay: 0.4 }
			);
			animate(
				'#fourthLine ',
				{ stroke: 'url(#paint3_linear_1168_47785)' },
				{ delay: 0.4 }
			);

			animate(
				'#bigCircle',
				{ stroke: 'url(#paint4_linear_1168_47785)' },
				{ delay: 0.4 }
			);
			animate(
				'#secondeLitleCircle',
				{ stroke: 'url(#paint5_linear_1168_47785)' },
				{ delay: 0.4 }
			);
			animate(
				'#medium',
				{ stroke: 'url(#paint6_linear_1168_47785)' },
				{ delay: 0.4 }
			);
			animate(
				'#litleCicle',
				{ fill: 'url(#paint7_linear_1168_47785)' },
				{ delay: 0.4 }
			);
		};
		if (startTransition) {
			showAnimation();
		}
	}, [animate, startTransition]);
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
			<svg
				ref={scope}
				width="120"
				height="78"
				viewBox="0 0 84 78"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				// style={{ transform: 'translateY(-5vh) translateX(8vh);' }}
				className={styles.moleculeSvg}
			>
				<path
					pathLength={1}
					d="M83 26.8784C83 41.1742 71.4565 52.7568 57.225 52.7568C52.5848 52.7568 48.2336 51.5265 44.4742 49.3737C43.9501 49.0736 43.3801 49.0753 42.9186 49.1817C42.4546 49.2886 42.0191 49.5163 41.6581 49.7923C41.2966 50.0685 40.9636 50.4284 40.7366 50.8448C40.5117 51.2574 40.3537 51.7999 40.4873 52.3804C40.8226 53.8379 41 55.357 41 56.9189C41 68.013 32.0421 77 21 77C9.95793 77 1 68.013 1 56.9189C1 45.8248 9.95793 36.8378 21 36.8378C23.8851 36.8378 26.6251 37.4506 29.1 38.5527C29.6442 38.795 30.2069 38.744 30.6549 38.6025C31.1072 38.4595 31.5243 38.2018 31.8649 37.9002C32.2051 37.5988 32.5123 37.2151 32.7064 36.7803C32.8994 36.3479 33.0108 35.7888 32.817 35.2167C31.931 32.6017 31.45 29.7975 31.45 26.8784C31.45 12.5825 42.9935 1 57.225 1C71.4565 1 83 12.5825 83 26.8784Z"
					stroke="black"
					stroke-width="2"
				/>
				<line
					opacity={0}
					pathLength={0}
					id="fistLine"
					x1="-17"
					y1="57.8171"
					x2="30"
					y2="57.8171"
					stroke="black"
					stroke-width="2"
				/>
				<line
					opacity={0}
					pathLength={0}
					id="secondLine"
					x1="35.1836"
					y1="57.8171"
					x2="50.4559"
					y2="57.8171"
					stroke="black"
					stroke-width="2"
				/>
				<line
					opacity={0}
					pathLength={0}
					id="thirdLine"
					x1="55.9102"
					y1="57.8171"
					x2="85.091"
					y2="57.8171"
					stroke="black"
					stroke-width="2"
				/>
				<line
					opacity={0}
					pathLength={0}
					id="fourthLine"
					x1="90"
					y1="57.8171"
					x2="100"
					y2="57.8171"
					stroke="black"
					stroke-width="2"
				/>
				<circle
					id="bigCircle"
					cx="57.5"
					cy="26.5"
					r="16.5"
					stroke="black"
					stroke-width="2"
				/>
				<circle
					id="secondeLitleCircle"
					cx="59"
					cy="20"
					r="4"
					stroke="black"
					stroke-width="2"
				/>
				<circle
					id="medium"
					cx="21"
					cy="57"
					r="13"
					stroke="black"
					stroke-width="2"
				/>
				<circle id="litleCicle" cx="17" cy="56" r="2" fill="black" />
				<defs>
					<linearGradient
						id="paint0_linear_1168_47785"
						x1="10.5407"
						y1="58.8171"
						x2="20.0691"
						y2="60.1807"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#FFB68D" />
						<stop offset="1" stop-color="#9773F9" />
					</linearGradient>
					<linearGradient
						id="paint1_linear_1168_47785"
						x1="55.8931"
						y1="58.8171"
						x2="30.5996"
						y2="20.441"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#FFB68D" />
						<stop offset="1" stop-color="#9773F9" />
					</linearGradient>
					<linearGradient
						id="paint2_linear_1168_47785"
						x1="79.3396"
						y1="58.8171"
						x2="79.9948"
						y2="63.1455"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#FFB68D" />
						<stop offset="1" stop-color="#9773F9" />
					</linearGradient>
					<linearGradient
						id="paint3_linear_1168_47785"
						x1="115.751"
						y1="58.8171"
						x2="117.961"
						y2="60.903"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#FFB68D" />
						<stop offset="1" stop-color="#9773F9" />
					</linearGradient>
					<linearGradient
						id="paint4_linear_1168_47785"
						x1="10.5407"
						y1="0.18286"
						x2="46.0408"
						y2="6.32558"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#FFB68D" />
						<stop offset="1" stop-color="#9773F9" />
					</linearGradient>
					<linearGradient
						id="paint5_linear_1168_47785"
						x1="54.8308"
						y1="16.5459"
						x2="64.9737"
						y2="18.301"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#FFB68D" />
						<stop offset="1" stop-color="#9773F9" />
					</linearGradient>
					<linearGradient
						id="paint6_linear_1168_47785"
						x1="79.3396"
						y1="4.27368"
						x2="107.74"
						y2="9.18785"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#FFB68D" />
						<stop offset="1" stop-color="#9773F9" />
					</linearGradient>
					<linearGradient
						id="paint7_linear_1168_47785"
						x1="115.751"
						y1="20.6367"
						x2="119.808"
						y2="21.3387"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#FFB68D" />
						<stop offset="1" stop-color="#9773F9" />
					</linearGradient>
					<linearGradient
						id="paint8_linear_1168_47785"
						x1="115.751"
						y1="20.6367"
						x2="119.808"
						y2="21.3387"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#FFB68D" />
						<stop offset="1" stop-color="#9773F9" />
					</linearGradient>
				</defs>
			</svg>
		</div>
	);
}

export default MoleculeSvg;
