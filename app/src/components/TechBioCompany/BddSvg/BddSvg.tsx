import React, { useEffect } from 'react';
import { motion, useAnimate, useInView } from 'framer-motion';
import styles from './BddSvg.module.scss';
interface Props {
	startTransition: boolean;
}

function BddSvg({ startTransition }: Props) {
	const [scope, animate] = useAnimate();

	const isInView = useInView(scope);
	useEffect(() => {
		const showAnimation = async () => {
			const controls = animate('#firstBlock', { opacity: 1 });
			animate('#domeStart', { y: -25 });
			await animate('#secondeBlock', { opacity: 1 });
			animate('#domeStart', { y: -50 });
			await animate('#thirdBlock', { opacity: 1 });
			animate('#smile', { opacity: 1, scale: 1 }, { duration: 1 });
			animate('#domeStart', { fill: 'url(#paint0_linear_1440_42660)' });
			animate('path', { stroke: 'url(#paint0_linear_1440_42660)' });
			animate('#domeStart', { opacity: 0 });
			animate('#domeEnd', { opacity: 1 });
			controls.play();
		};

		if (startTransition) {
			showAnimation();
		} else {
		}
	}, [startTransition]);
	return (
		<div>
			<svg
				width="286"
				height="160"
				viewBox="0 0 286 160"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				style={{ zIndex: '-1', position: 'absolute' }}
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
				width="94"
				height="182"
				viewBox="0 0 94 182"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={styles.bddSvg}
				// style={{ transform: 'translateY(-9vh) translateX(9vh)' }}
			>
				<path
					id="firstBlock"
					d="M92 157C92 169.703 71.8528 180 47 180C22.1472 180 2 169.703 2 157V133V132C2 132.167 2.00349 132.334 2.01042 132.5C2.53084 120.028 22.4741 110 47 110C71.5259 110 91.4691 120.028 91.9896 132.5C91.9965 132.334 92 132.167 92 132V133V157Z"
					fill="white"
				/>
				<path
					id="firstBlock"
					d="M92 133C92 120.297 71.8528 110 47 110C22.1472 110 2 120.297 2 133M92 157C92 169.703 71.8528 180 47 180C22.1472 180 2 169.703 2 157V132C2 144.703 22.1472 155 47 155C71.8528 155 92 144.703 92 132V157Z"
					stroke="black"
					stroke-width="2"
				/>
				<path
					id="secondeBlock"
					opacity={0}
					d="M92 132C92 144.703 71.8528 155 47 155C22.1472 155 2 144.703 2 132V108V107C2 107.167 2.00349 107.334 2.01042 107.5C2.53084 95.0283 22.4741 85 47 85C71.5259 85 91.4691 95.0283 91.9896 107.5C91.9965 107.334 92 107.167 92 107V108V132Z"
					fill="white"
				/>
				<path
					id="secondeBlock"
					opacity={0}
					d="M92 108C92 95.2975 71.8528 85 47 85C22.1472 85 2 95.2975 2 108M92 132C92 144.703 71.8528 155 47 155C22.1472 155 2 144.703 2 132V107C2 119.703 22.1472 130 47 130C71.8528 130 92 119.703 92 107V132Z"
					stroke="black"
					stroke-width="2"
				/>
				<path
					id="thirdBlock"
					opacity={0}
					d="M92 107C92 119.703 71.8528 130 47 130C22.1472 130 2 119.703 2 107V83V82C2 82.1671 2.00349 82.3338 2.01042 82.5C2.53084 70.0283 22.4741 60 47 60C71.5259 60 91.4691 70.0283 91.9896 82.5C91.9965 82.3338 92 82.1671 92 82V83V107Z"
					fill="white"
				/>
				<path
					id="thirdBlock"
					opacity={0}
					d="M92 83C92 70.2975 71.8528 60 47 60C22.1472 60 2 70.2975 2 83M92 107C92 119.703 71.8528 130 47 130C22.1472 130 2 119.703 2 107V82C2 94.7025 22.1472 105 47 105C71.8528 105 92 94.7025 92 82V107Z"
					stroke="black"
					stroke-width="2"
				/>
				<motion.path
					transition={{ duration: 0 }}
					id="domeStart"
					d="M47 154C59.2687 154 70.4252 151.572 78.5517 147.601C86.6117 143.663 92 138.032 92 131.5C92 124.968 86.6117 119.337 78.5517 115.399C70.4252 111.428 59.2687 109 47 109C34.7313 109 23.5748 111.428 15.4483 115.399C7.38831 119.337 2 124.968 2 131.5C2 138.032 7.38831 143.663 15.4483 147.601C23.5748 151.572 34.7313 154 47 154Z"
					fill="black"
					stroke="black"
					stroke-width="2"
				/>
				<motion.path
					id="domeEnd"
					opacity={0}
					xmlns="http://www.w3.org/2000/svg"
					d="M47 105C59.2687 105 70.4252 102.572 78.5517 98.6013C86.6117 94.6629 92 89.032 92 82.5C92 75.968 86.6117 70.3371 78.5517 66.3987C70.4252 62.4278 59.2687 60 47 60C34.7313 60 23.5748 62.4278 15.4483 66.3987C7.38831 70.3371 2 75.968 2 82.5C2 89.032 7.38831 94.6629 15.4483 98.6013C23.5748 102.572 34.7313 105 47 105Z"
					fill="url(#paint0_linear_1440_42660)"
					stroke="black"
					stroke-width="2"
				/>
				<path
					id="smile"
					opacity={0}
					scale={0}
					d="M40.952 42C31.11 42 29 39.89 29 30.048M65 30.048C65 39.89 62.89 42 53.048 42M53.048 6C62.89 6 65 8.11 65 17.952M39 28C39.9307 29.2428 41.1384 30.2514 42.5271 30.9458C43.9159 31.6401 45.4474 32.0011 47 32C48.5527 32.0012 50.0842 31.6403 51.473 30.946C52.8617 30.2516 54.0694 29.2429 55 28M41 20.022V20M53 20.022V20M29 17.952C29 8.11 31.11 6 40.952 6"
					stroke="url(#paint1_linear_1440_42660)"
					stroke-width="4"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_1440_42660"
						x1="22.4286"
						y1="61"
						x2="82.334"
						y2="82.2134"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#FFB68D" />
						<stop offset="1" stop-color="#9773F9" />
					</linearGradient>
					<linearGradient
						id="paint1_linear_1440_42660"
						x1="36.9481"
						y1="6"
						x2="63.7262"
						y2="10.6335"
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

export default BddSvg;
