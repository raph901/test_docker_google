'use client'
import Press from '@/components/Presses/Press/Press';
import styles from "./Presses.module.scss"
import GetPress from '@/services/press/GetPress';

const Presses = () => {
	const presses = GetPress();

	return(
		<div className={styles.container}>
			<div className={styles.presses}>
				{presses.map((press, index) => (
					<div key={index} className={styles.press}>
						<Press press={press} />
					</div>
				))}
			</div>
		</div>
	);
}

export default Presses;
