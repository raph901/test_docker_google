'use client';
import styles from './Careers.module.scss';
import Career from '@/components/Careers/Career/Career';
import GetCareers from '@/services/careers/GetCareers';

const Careers = () => {
	const careers = GetCareers();

	return (
		<div className={styles.container}>
			<div className={styles.careers}>
				{careers.map((career, index) => (
					<div key={index} className={styles.career}>
						<Career career={career} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Careers;
