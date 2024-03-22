import styles from './GradientBottom.module.scss'

type GradientBottomProps = {
	props?: {
		showGradient1?: boolean,
		showGradient2?: boolean
	}
}

/*
* There are 3 layers of gradient,
* the first layer goes from gba(254,250,246,1) to white
* the second layer goes from white to gba(254,250,246,1)
* and the third layer has two merged gradients.
* */

const GradientBottom = ({props}: GradientBottomProps) => {
	const heightGradient1 = props ? props.showGradient1 ? 15 : 0 : 15;
	const heightGradient2 = props ? props.showGradient2 ? 15 : 0 : 15;
	const heightForMerginGradient = 100 - heightGradient1 - heightGradient2;

	return (
		<div className={styles.container}>
			<div className={styles.gradient1} style={{height: `${heightGradient1}%`}}></div>
			<div className={styles.gradient2} style={{height: `${heightGradient2}%`}}></div>
			<div className={styles.merging2gradientsContainer} style={{height: `${heightForMerginGradient}%`}}>
				<div className={styles.gradientLeft}></div>
				<div className={styles.gradientRight}></div>
				<div className={styles.borderRound}></div>
			</div>
		</div>
	);
}

export default GradientBottom;
