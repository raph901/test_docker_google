'use client';

import React, { useState } from 'react';
import styles from './News.module.scss';
import AnimatedText from '../AnimatedText/AnimatedText';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedText2 from '../AnimatedText/AnimatedText2';
import GetNews from '@/services/news/GetNews';

function News() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const yourNews = GetNews();

	const goToPreviousSlide = () => {
		const currentIndex = yourNews.findIndex(
			(news) => news.titleNews === yourNews[currentSlide].titleNews
		);
		const newIndex =
			currentIndex === 0 ? yourNews.length - 1 : currentIndex - 1;
		setCurrentSlide(newIndex);
	};

	const goToNextSlide = () => {
		const currentIndex = yourNews.findIndex(
			(news) => news.titleNews === yourNews[currentSlide].titleNews
		);
		const newIndex =
			currentIndex === yourNews.length - 1 ? 0 : currentIndex + 1;
		setCurrentSlide(newIndex);
	};

	return (
		<section className={styles.news}>
			{/* <div className={styles.secondBg}></div> */}
			<div className={styles.bgContainer}></div>
			<div className={styles.content}>
				<div className={styles.titleContainer}>
					<AnimatedText
						el="h2"
						className={styles.title}
						text={['NEWS']}
					/>
				</div>
				<div className={styles.carouselContainerNews}>
					<div className={styles.carousel}>
						<div className={styles.innerCarousel}>
							{yourNews.map((news, index) => (
								<div
									key={index}
									className={styles.itemContainer}
									style={{
										display:
											index === currentSlide
												? 'block'
												: 'none'
									}}
								>
									<div className={styles.mainContent}>
										<AnimatedText2
											el="h2"
											className={styles.text}
											text={news.titleNews}
										/>
									</div>
									<div className={styles.link}>
										<div className={styles.readMore}>
											<Link
												href={news.linkNews}
												className={styles.linkNews}
											>
												<div
													className={
														styles.buttonReadMore
													}
												>
													<Image
														src="/images/news/arrowRight.svg"
														alt=""
														width={24}
														height={24}
														className={
															styles.buttonImage
														}
													/>
													<button
														className={
															styles.button
														}
													>
														Read more
													</button>
												</div>
											</Link>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
					{yourNews.length > 1 ? (
						<div className={styles.arrowSvg}>
							<div onClick={goToPreviousSlide}>
								<Image
									src="/images/news/arrowLeft.svg"
									alt=""
									width={52}
									height={52}
								/>
							</div>
							<div onClick={goToNextSlide}>
								<Image
									src="/images/news/arrowRight.svg"
									alt=""
									width={52}
									height={52}
								/>
							</div>
						</div>
					) : (
						''
					)}
				</div>
			</div>
		</section>
	);
}

export default News;
