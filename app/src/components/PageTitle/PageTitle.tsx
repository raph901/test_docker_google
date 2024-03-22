import TitleSection from '@/components/TitleSection/TitleSection';
import styles from './PageTitle.module.scss';

type PageTitleProps = {
	page: {
		title?: string;
		buttonCaption?: string;
	};
};

const PageTitle = ({ page }: PageTitleProps) => {
	return (
		<div className={styles.container}>
			{page.buttonCaption ? (
				<TitleSection label={page.buttonCaption} />
			) : (
				''
			)}
			<p>{page.title}</p>
		</div>
	);
};

export default PageTitle;
